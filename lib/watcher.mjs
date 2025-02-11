import chokidar from 'chokidar'

import getHandlerByType from './getHandlerByType.mjs'

export default class Watch {
	watchReady = false
	watchDirectory = undefined

	constructor(watchDirectory) {
		this.watchDirectory = watchDirectory
		console.log({ watchDirectory })
		this.startWatch(watchDirectory)
	}

	startWatch(watchDirectory) {
		chokidar
			.watch(watchDirectory, { ignoreInitial: false })
			.on('all', (event, updatePath) => {
				console.log(event, updatePath)

				if (event === 'add') {
					getHandlerByType({ updatePath })
				}
			})
			.on('ready', () =>
				console.log('✅ Initial scan complete. Watching for changes...')
			)
	}
}
