import test from 'node:test'
import assert from 'node:assert'

import document from './document.mjs'

test('document directory set in constructor', () => {
	const newDocument = new Document({ directory: 'dir/foo' })
	assert.strictEqual(newDocument.directory, 'dir/foo')

	//function document(filePath, dist, watchDirectory, projectRoot) {
})
