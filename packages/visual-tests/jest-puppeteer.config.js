module.exports = Object.assign(
  { chromiumFlags: ['–ignore-certificate-errors'] },
  require('jest-puppeteer-docker/lib/config')()
);
