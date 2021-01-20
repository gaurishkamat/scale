describe('Button', () => {
  test.each([
    ['large-standard'],
    ['large-secondary'],
    ['large-secondary-disabled'],
    ['large-disabled'],
    ['large-with-icon-before'],
    ['large-with-icon-after'],
    ['large-icon-only'],
    ['large-link'],
    ['small-standard'],
    ['small-secondary'],
    ['small-secondary-disabled'],
    ['small-disabled'],
    ['small-with-icon-before'],
    ['small-with-icon-after'],
    ['small-icon-only'],
    ['small-link'],
  ])('%p', async (variant) => {
    await global.page.goto(
      `http://host.docker.internal:3123/iframe.html?id=components-button--${variant}&viewMode=story`
    );
    await page.waitForSelector('html.hydrated');
    const previewHtml = await page.$('body');
    expect(await previewHtml.screenshot()).toMatchImageSnapshot();
  });
});
