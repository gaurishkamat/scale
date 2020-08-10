describe("Switch", () => {
  test.each([
    ["standard"],
    ["a-switch-with-icon"],
    ["active-switch-disabled"],
    ["inactive-switch-disabled"]
  ])("matches snapshot", async variant => {
    await global.page.goto(
      `http://host.docker.internal:3123/iframe.html?id=components-switch--${variant}`
    );
    await page.waitForSelector("html.hydrated");
    const previewHtml = await page.$("div#root");
    expect(await previewHtml.screenshot()).toMatchImageSnapshot();
  });
});
