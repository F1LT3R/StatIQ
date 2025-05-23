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

function markdownToHtml(markdownBody) {
	try {
		const html = md.render(markdownBody)
		return html
	} catch (error) {
		return error
	}
}

export default markdownToHtml
