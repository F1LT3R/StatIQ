import chokidar from 'chokidar'

import getHandlerByType from './getHandlerByType.mjs'

export default class Watch {
	watchReady = false
	watchDirectory = undefined

	constructor(watchDirectory, { build }) {
		this.watchDirectory = watchDirectory
		console.log({ watchDirectory })
		this.startWatch(watchDirectory, build)
	}

	startWatch(watchDirectory, build) {
		chokidar
			.watch(watchDirectory, { ignoreInitial: false })
			.on('all', (event, updatePath) => {
				console.log(event, updatePath)

				if (event === 'add') {
					getHandlerByType({ updatePath }, build)
				}
			})
			.on('ready', () =>
				console.log('✅ Initial scan complete. Watching for changes...')
			)
	}
}
