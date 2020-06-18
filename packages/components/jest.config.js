module.exports = {
  preset: 'jest-puppeteer-docker',
  setupFilesAfterEnv: ['./test-environment-setup.js'],
  globalSetup: './setup.js',
  testMatch: ['<rootDir>/src/**/?(*.)+(visual.spec).(js|jsx|ts|tsx)'],
};
