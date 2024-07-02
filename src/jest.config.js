
module.exports = {
  verbose: true,
  workerIdMemoryLimit: '512MB',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  covaregeProvider: 'v8',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'src/meddlewares/',
  ],
  collectCoverageFrom: ['<rootDir>/src/**/*'],
  coverageReporters: ['html','cobertura'],
  setupFilesAfterEnv: ['jest-extended/all'],
  testPathIgnorePatterns: ['/node_modules/'],
  globalSetup: '<rootDir>./src/tests/jest.setup.js',
  globalTeardown: '<rootDir>./src/tests/jest.teardown.js',
};