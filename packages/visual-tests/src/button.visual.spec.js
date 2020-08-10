describe("Button", () => {
  test.each([
    ["standard"],
    ["secondary"],
    ["disabled"],
    ["with-icon-before"],
    ["with-icon-after"],
    ["icon-only"],
    ["small-icon"]
  ])("matches snapshot", async variant => {
    await global.page.goto(
      `http://host.docker.internal:3123/iframe.html?id=components-button--${variant}`
    );
    await page.waitForSelector("html.hydrated");
    const previewHtml = await page.$("div#root");
    expect(await previewHtml.screenshot()).toMatchImageSnapshot();
  });
});
