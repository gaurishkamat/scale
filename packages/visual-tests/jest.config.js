module.exports = {
  preset: 'jest-puppeteer-docker',
  setupFilesAfterEnv: ['./test-environment-setup.js'],
  globalSetup: './setup.js',
  testMatch: ['**/?(*.)+(visual.spec).[tj]s?(x)'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
};
