const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1000,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
