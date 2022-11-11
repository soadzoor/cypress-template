import { defineConfig } from 'cypress'

export default defineConfig({
	e2e: {
		baseUrl: "http://duckduckgo.com",
		defaultCommandTimeout: 60000,
	},
	viewportWidth: 1920,
	viewportHeight: 969, // 1080 - top bar - bottom bar
	env: {
		keywordToSearchFor: "I like trains",
	},
})