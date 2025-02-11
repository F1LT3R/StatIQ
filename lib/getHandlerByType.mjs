import path from 'node:path'
import fs from 'node:fs'

import picomatch from 'picomatch'

// import document from './handlers/document.mjs'
// import image from './handlers/image.mjs'
// import script from './handlers/script.mjs'
// import style from './handlers/style.mjs'
// import copy from './handlers/copy.mjs'

const buildTypes = ['document', 'image', 'script', 'style', 'copy']

function getHandlerByType({ updatePath, build }) {
	for (let index of buildTypes) {
		console.log(index)
	}
	// const matcher = picomatch('src/*/*.{gif,png,jpg,svg,!(*.md|*.less)}')

	// const files = [
	// 	'src/assets/image.png',
	// 	'src/assets/icon.svg',
	// 	'src/assets/style.less',
	// 	'src/assets/readme.md',
	// 	'src/assets/photo.jpg',
	// 	'src/assets/graphic.gif',
	// ]

	// const matchedFiles = files.filter(matcher)
	// console.log(matchedFiles)

	const handler = function () {}
	return handler
}

export default getHandlerByType
