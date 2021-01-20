describe('Switch', () => {
  test.each([
    ['standard'],
    ['standard-disabled'],
    ['selected'],
    ['selected-disabled'],
  ])('%p', async variant => {
    await global.page.goto(
      `http://host.docker.internal:3123/iframe.html?id=components-switch--${variant}&viewMode=story`
    );
    await page.waitForSelector('html.hydrated');

    const previewHtml = await page.$('body');

    expect(await previewHtml.screenshot()).toMatchImageSnapshot();

    const firstButton = await page.evaluateHandle(
      'document.querySelector("#root > scale-switch > div > div")'
    );

    await firstButton.hover();

    expect(await previewHtml.screenshot()).toMatchImageSnapshot();

    await page.mouse.move(25, 25);
    await page.mouse.down();

    expect(await previewHtml.screenshot()).toMatchImageSnapshot();
  });
});
