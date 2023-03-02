/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  collectCoverage: false,
  testEnvironment: 'node',
  modulePaths: ['<rootDir>/src/'],
  collectCoverageFrom: ['src/**/*.ts'],
  testPathIgnorePatterns: ['/build/', '/node_modules/']
}
