const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
