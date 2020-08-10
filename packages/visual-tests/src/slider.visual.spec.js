describe("Slider", () => {
  test.each([
    ["standard"],
    ["slider-track-small"],
    ["slider-with-custom-color"],
    ["disabled-slider"]
  ])("matches snapshot", async variant => {
    await global.page.goto(
      `http://host.docker.internal:3123/iframe.html?id=components-slider--${variant}`
    );
    await page.waitForSelector("html.hydrated");
    const previewHtml = await page.$("div#root");
    expect(await previewHtml.screenshot()).toMatchImageSnapshot();
  });
});
