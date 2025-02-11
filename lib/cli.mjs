#!/usr/bin/env node
import { readFile } from 'node:fs/promises'
import path from 'node:path'

import Watcher from './watcher.mjs'

const cwd = process.cwd()
const settingsPath = new URL(`file://${cwd}/statiq.settings.json`)
const rawData = await readFile(settingsPath, 'utf8')
const settings = JSON.parse(rawData)
// console.log(settings)

console.log('Welcome to Statiq!')

const watchDirectory = path.resolve(cwd, settings.build.site.src)

const watcher = new Watcher(watchDirectory, settings)

// watcher.add(({ filePath }) => {
// 	const handler = getHandlerByType({ filePath }, settings)
// })

console.log(watcher)
