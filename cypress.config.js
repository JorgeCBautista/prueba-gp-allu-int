const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  viewportWidth: 1600,
  viewportHeight:900,
  projectId: "d3xos7",
  e2e: {
    env: {
      qa: {
        web: "https://qa.inteligenio.com/",
        api: "https://google.com/",
      },
      dev: {
        web: "https://www.cypress.io/",
        api: "https://google.com/",
      },
    },
    "specPattern": "**/**/*.feature",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
  },
});