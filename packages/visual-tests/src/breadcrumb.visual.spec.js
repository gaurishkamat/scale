describe("Breadcrumb", () => {
  test.each([
    ["standard"],
    ["with-custom-separator"],
    ["with-custom-separator-element"]
  ])("matches snapshot", async variant => {
    await global.page.goto(
      `http://host.docker.internal:3123/iframe.html?id=components-breadcrumb--${variant}`
    );
    await page.waitForSelector("html.hydrated");

    const firstLink = await page.evaluateHandle(
      `document.querySelector("#root > scale-breadcrumb").shadowRoot.querySelector("nav > ol > li:nth-child(1) > a")`
    );
    await firstLink.hover();

    const previewHtml = await page.$("div#root");
    expect(await previewHtml.screenshot()).toMatchImageSnapshot();
  });
});
