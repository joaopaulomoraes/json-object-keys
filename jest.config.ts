/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  collectCoverage: false,
  testEnvironment: 'node',
  modulePaths: ['<rootDir>/src/'],
  collectCoverageFrom: ['src/**/*.ts'],
  testPathIgnorePatterns: ['/dist/', '/node_modules/']
}
