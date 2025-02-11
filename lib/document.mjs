import path from 'node:path'

export default class Document {
	constructor({ src }, { build }) {
		this.src = src // absolute dir path

		const relative = path.relative(build.doc.src, src)
		this.dist = path.join(build.doc.dist, relative)
	}

	watchUpdate(filePath, updateType) {
		console.log({ filePath, updateType })
		return { filePath, updateType }
	}
}
