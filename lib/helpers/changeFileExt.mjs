import path from 'node:path'

function changeFileExt(filePath, newExt) {
	return path.format({
		...path.parse(filePath), // Parse the file path
		base: undefined, // Remove `base` to prevent conflicts
		ext: newExt.startsWith('.') ? newExt : `.${newExt}`, // Ensure proper extension format
	})
}

export default changeFileExt
