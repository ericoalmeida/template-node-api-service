module.export = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  coverageProvider: 'v8',
  coverageReporters: [
    'lcov'
  ],
  rootDir: undefined,
  roots: [
    '<rootDir>/src'
  ],
  testEnvironment: 'node',
  transform: { '.+\\.ts$': 'ts-jest' },
  testMatch: ['']
}
