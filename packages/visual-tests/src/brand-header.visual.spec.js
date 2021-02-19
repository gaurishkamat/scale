describe('Brand Header', () => {
  test.each([['standard']])('%p', async variant => {
    await global.page.goto(
      `http://host.docker.internal:3123/iframe.html?id=components-brand-header-navigation--${variant}&viewMode=story`
    );
    await page.waitForSelector('html.hydrated');

    const firstLink = await page.evaluateHandle(
      `document.querySelector("#root > div > scale-app-shell").shadowRoot.querySelector("div > scale-app-header > header > nav.header__nav > div > div.header__nav-menu-wrapper > div.header__nav-menu-left > ul > li.main-navigation__item > a")`
    );
    await firstLink.hover();

    const previewHtml = await page.$('body');
    expect(await previewHtml.screenshot()).toMatchImageSnapshot();
  });
});