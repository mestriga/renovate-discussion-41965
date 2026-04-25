'use strict'
module.exports = {
	hooks: {
		updateConfig(config) {
			console.error("Error logged from .pnpmfile.cjs updateConfig hook.")
			throw new Error("Error thrown from .pnpmfile.cjs updateConfig hook.")
			return config
		}
	}
}
