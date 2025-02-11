import fs from 'node:fs'
import path from 'node:path'

const readTypes = {
	1: 'file',
	2: 'dir',
	3: 'link',
}

function readDirectory(directory) {
	return new Promise((resolve, reject) => {
		fs.readdir(directory, { withFileTypes: true }, (error, files) => {
			if (error) return reject(error)

			const result = {
				root: path.resolve(directory),
				file: [],
				directory: [],
			}

			for (const file of files) {
				const number_ = file[Object.getOwnPropertySymbols(file)[0]]
				const validEnum = Object.keys(readTypes).includes(
					String(number_)
				)
				if (!validEnum) continue

				const type = readTypes[number_]
				result[type].push(path.resolve(directory, file.name))
			}

			resolve(result)
		})
	})
}

export default readDirectory
