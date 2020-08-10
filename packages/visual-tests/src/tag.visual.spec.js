describe("Tag", () => {
  test.each([
    ["standard"],
    ["a-dissmisable-tag"],
    ["a-small-tag"],
    ["a-small-dismissable-tag"],
    ["disabled-tag"],
    ["disabled-dismissable-tag"],
    ["variant-secondary-tag"],
    ["variant-secondary-link"],
    ["variant-secondary-dismissable"],
    ["variant-secondary-small"],
    ["variant-secondary-dismissable-small"]
  ])("matches snapshot", async variant => {
    await global.page.goto(
      `http://host.docker.internal:3123/iframe.html?id=components-tag--${variant}`
    );
    await page.waitForSelector("html.hydrated");
    const previewHtml = await page.$("div#root");
    expect(await previewHtml.screenshot()).toMatchImageSnapshot();
  });
});
