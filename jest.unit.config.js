module.exports = {
  testMatch: ["**/tests/unit/**/*.test.js"],
  testEnvironment: "node",
  transform: {},
  
  // GERAR cobertura somente nos unitários
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js"],

  // Se quiser excluir algo, pode:
  // collectCoverageFrom: ["src/**/*.js", "!src/main.js", "!src/ui.js"]
};
