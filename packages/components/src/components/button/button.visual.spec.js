describe('Button', () => {
  test.each([
    ['standard'],
    ['disabled'],
    ['with-icon'],
    ['icon-only'],
    ['small'],
    ['link'],
  ])('matches snapshot', async variant => {
    await global.page.goto(
      `http://host.docker.internal:3000/?path=/story/components-button--${variant}`
    );

    await page.waitForSelector('iframe#storybook-preview-iframe');

    const previewFrame = (await page.frames()).find(
      frame => frame.name() === 'storybook-preview-iframe'
    );

    await previewFrame.waitForSelector('html.hydrated');
    const previewHtml = await previewFrame.$('html');

    expect(await previewHtml.screenshot()).toMatchImageSnapshot();
  });
});
