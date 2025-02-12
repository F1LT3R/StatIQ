import { readFile, mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

import markdownit from 'markdown-it'
import hljs from 'highlight.js'
import anchor from 'markdown-it-anchor'
import { full as emoji } from 'markdown-it-emoji'
import taskLists from 'markdown-it-task-lists'
import linkImg from 'markdown-it-linkify-images'
import lazy_loading from 'markdown-it-image-lazy-loading'
import frontmatter from 'front-matter'

const highlight = function (str, lang) {
	let langStr

	if (lang === 'sh-wrap') {
		lang = 'sh'
		langStr = 'sh-wrap'
	} else {
		langStr = lang
	}

	if (lang && hljs.getLanguage(lang)) {
		try {
			return (
				'<pre><code class="hljs language-' +
				langStr +
				'">' +
				hljs.highlight(str, { language: lang, ignoreIllegals: true })
					.value +
				'</code></pre>'
			)
		} catch {}
	}

	return (
		'<pre><code class="hljs">' + md.utils.escapeHtml(str) + '</code></pre>'
	)
}

const md = markdownit({
	html: true,
	linkify: true,
	typographer: true,
	xhtmlOut: true,
	langPrefix: 'language-',
	highlight,
})
	.use(anchor)
	.use(emoji)
	.use(taskLists)
	.use(linkImg)
	.use(lazy_loading, {
		image_size: true,
		// base_path: path.resolve('.', 'src/')
	})

const markdown = (markdownBody) => {
	try {
		const html = md.render(markdownBody)
		return html
	} catch (error) {
		return error
	}
}

function changeFileExtension(filePath, newExt) {
	return path.format({
		...path.parse(filePath), // Parse the file path
		base: undefined, // Remove `base` to prevent conflicts
		ext: newExt.startsWith('.') ? newExt : `.${newExt}`, // Ensure proper extension format
	})
}

async function writeFileWithDirs(filePath, content) {
	try {
		// Extract the directory from filePath
		const dir = path.dirname(filePath)

		// Ensure the directory exists
		await mkdir(dir, { recursive: true })

		// Write the file
		await writeFile(filePath, content, 'utf-8')

		console.log(`✅ File written: ${filePath}`)
	} catch (error) {
		console.error('❌ Error writing file:', error)
	}
}

function document(filePath, dist, watchDirectory, projectRoot) {
	// console.log({ 'Document Handler': { filePath, dist } })

	readFile(filePath, 'utf8')
		.then((contents) => {
			const frontMatter = frontmatter(contents)
			// console.log({ frontMatter })
			const { permalink } = frontMatter.attributes
			// console.log({ permalink })

			const markdownBody = frontMatter.body
			const html = markdown(markdownBody)
			// console.log({ html })

			const relPath = path.relative(watchDirectory, filePath)
			// console.log({ relPath })

			let distFilePath = permalink
				? path.join(projectRoot, dist, permalink, 'index.html')
				: path.join(projectRoot, dist, relPath)

			distFilePath = changeFileExtension(distFilePath, '.html')

			const distDir = path.dirname(distFilePath)
			console.log({ distFilePath, distDir })

			return writeFileWithDirs(distFilePath, html)
		})
		.catch((error) => console.error(error))
}

export default document
