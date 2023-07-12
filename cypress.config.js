const { defineConfig } = require ("cypress") ;

module.exports = defineConfig ( {
  chromeWebSecurity: false,
  pageLoadTimeout: 60000,
  watchForFileChanges: false,
  execTimeout: 10000,
  env: {
    openSignUpUrl: 'https://plug-frontend.vercel.app/register',
    openLoginUrl: 'https://plug-frontend.vercel.app/login',
  },
    viewportHeight: 960,
    viewportwidth: 1600,
    defaultCommandTimeout: 30000,
    e2e: {
      testIsolation: false,
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
    },
  });
