describe('ProgressBar', () => {
  test.each([['complete-green'], ['complete-error']])('%p', async variant => {
    await global.page.goto(
      `http://host.docker.internal:3123/iframe.html?id=components-progress-bar--${variant}&viewMode=story`
    );
    await page.waitForSelector('html.hydrated');
    await page.waitFor(5000);
    const previewHtml = await page.$('body');
    expect(await previewHtml.screenshot()).toMatchImageSnapshot();
  });
});
