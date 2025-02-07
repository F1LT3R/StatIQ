import test from 'node:test'
import assert from 'node:assert'

import Document from './document.mjs'

test('document directory set in constructor', () => {
  const newDocument = new Document({ directory: 'dir/foo' })
  assert.strictEqual(newDocument.directory, 'dir/foo')
})
