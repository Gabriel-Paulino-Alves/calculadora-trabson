module.exports = {
  testMatch: ["**/tests/unit/**/*.test.js"],
  testEnvironment: "node",
  transform: {},

  // Gerar cobertura somente dos testes unitários
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js"],

  // DIRETÓRIO DEDICADO ao coverage dos unit tests
  coverageDirectory: "coverage/unit",

  // Garantir que o Codecov receba um lcov.info 100% válido
  coverageReporters: ["lcov", "text"]
};
