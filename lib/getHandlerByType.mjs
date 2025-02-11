import path from 'node:path'
import fs from 'node:fs'

import picomatch from 'picomatch'

// import document from './handlers/document.mjs'
// import image from './handlers/image.mjs'
// import script from './handlers/script.mjs'
// import style from './handlers/style.mjs'
// import copy from './handlers/copy.mjs'

const buildTypes = ['document', 'image', 'script', 'style', 'copy']

function getHandlerByType({ updatePath }, build) {
	console.log(build)

	for (let type of buildTypes) {
		console.log({ type })

		const pattern = build[type].src
		console.log({ pattern })
		if (!pattern) {
			continue
		}

		const matcher = picomatch(pattern)
		console.log({ matcher })

		const matchedFiles = [updatePath].filter((file) => matcher(file))
		console.log(matchedFiles)
	}

	// const handler = function () {}
	// return handler
}

export default getHandlerByType
