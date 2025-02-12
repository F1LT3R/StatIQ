import test from 'node:test'
import assert from 'node:assert'

import Document from './document.mjs'

test('document directory set in constructor', () => {
	const newDocument = new Document({ directory: 'dir/foo' })
	assert.strictEqual(newDocument.directory, 'dir/foo')
})

test('document watch fn receives events', () => {
	const newDocument = new Document({ directory: 'dir/foo' })
	const result = newDocument.watchUpdate('dir/foo', 'CHANGED')
	assert.strictEqual(result.filePath, 'dir/foo')
	assert.strictEqual(result.updateType, 'CHANGED')
})
