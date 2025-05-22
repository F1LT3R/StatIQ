import { readFile, mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

import markdown from '../helpers/markdown-it.mjs'

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
