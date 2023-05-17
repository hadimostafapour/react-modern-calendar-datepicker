module.exports = {
  verbose: true,
  "testEnvironment": "jsdom",
  setupFilesAfterEnv: ['./test/setup-tests'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
