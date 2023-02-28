export default {
  preset: 'ts-jest',
  collectCoverage: false,
  testEnvironment: 'node',
  modulePaths: ['<rootDir>/src/'],
  collectCoverageFrom: ['src/**/*.ts'],
  testPathIgnorePatterns: ['/dist/', '/node_modules/'],
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  }
}
