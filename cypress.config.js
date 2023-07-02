const {defineConfig} = require('cypress');

module.exports = defineConfig({
    chromeWebSecurity: false,
    video: false,
    defaultCommandTimeout: 25000,
    screenshotOnRunFailure: false,
    numTestsKeptInMemory: 0,
	pageLoadTimeout: 120000,
    env: {
        monEnvironnement: 'local',
    },
    e2e: {
        setupNodeEvents(on, config) {
            return require('./cypress/plugins/index.js')(on, config);
        },
        specPattern: 'cypress/e2e/**/*.feature',
        excludeSpecPattern: '**/*.{js,ts}',
    },
});
