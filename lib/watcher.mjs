import chokidar from 'chokidar'

export default class Watch {
	constructor({ watchDirectory }) {
		const watcher = chokidar.watch(watchDirectory)
		return watcher
	}
}
