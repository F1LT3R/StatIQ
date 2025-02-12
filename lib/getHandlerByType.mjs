import picomatch from 'picomatch'

import document from './handlers/document.mjs'
import image from './handlers/image.mjs'
import script from './handlers/script.mjs'
import style from './handlers/style.mjs'
import copy from './handlers/copy.mjs'
import unlink from './handlers/unlink.mjs'

const handlers = { document, image, script, style, copy, unlink }

function mapSlotsToHandlers(path, slots, type, projectRoot) {
	const handlerMap = []

	for (let slot of slots) {
		const pattern = `${projectRoot}/${slot.src}`
		const matcher = picomatch(pattern)
		const matchedFiles = [path].filter((file) => matcher(file))
		const matched = matchedFiles.includes(path)

		if (matched) {
			const handler = handlers[type]
			const { dist } = slot
			handlerMap.push({ handler, dist })
		}
	}

	return handlerMap
}

function findHandlers(updatePath, projectRoot, build) {
	for (let type in handlers) {
		const slots = build[type]
		return mapSlotsToHandlers(updatePath, slots, type, projectRoot)
	}
}

function getHandlerByType({ updatePath, projectRoot }, { build }) {
	return findHandlers(updatePath, projectRoot, build)
}

export default getHandlerByType
