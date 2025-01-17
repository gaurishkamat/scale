describe('Button', () => {
  test.each([
    ['standard'],
    ['secondary'],
    ['secondary-disabled'],
    ['disabled'],
    ['with-icon-before'],
    ['with-icon-after'],
    ['icon-only'],
    ['link'],
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
