module.exports = {
  testMatch: ["**/tests/integration/**/*.test.js"],
  testEnvironment: "jsdom",
  transform: {},
  
  // DESATIVAR cobertura nos testes de integração
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.js", "!src/ui.js", "!src/main.js"]
};
