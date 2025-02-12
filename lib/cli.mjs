#!/usr/bin/env node
import { readFile } from 'node:fs/promises'
import path from 'node:path'

import Watcher from './watcher.mjs'
import getHandlerByType from './getHandlerByType.mjs'

const cwd = process.cwd()
const settingsPath = new URL(`file://${cwd}/statiq.settings.json`)
const rawData = await readFile(settingsPath, 'utf8')
const settings = JSON.parse(rawData)

console.log('Welcome to Statiq!')

const watchDirectory = path.resolve(cwd, settings.build.site.src)
const projectRoot = cwd

// if (handler.type !== undefined) {
// 	handlers[handler.type]({ watchDirectory }, build)
// }

const watcher = new Watcher({ watchDirectory })
watcher
	.on('add', (updatePath) => {
		const slots = getHandlerByType({ updatePath, projectRoot }, settings)

		for (let slot of slots) {
			const { handler, dist } = slot
			handler(updatePath, dist, watchDirectory, projectRoot, settings)
		}
	})
	.on('ready', () =>
		console.log('✅ Initial scan complete. Watching for changes...')
	)
