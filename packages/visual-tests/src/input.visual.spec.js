describe("Input", () => {
  test.each([
    ["standard"],
    ["placeholder"],
    ["static"],
    ["animated"],
    ["with-error"],
    ["disabled"],
    ["max-length-with-counter"],
    ["checkbox"],
    ["checkbox-with-custom-icon"],
    ["radio"],
    ["radio-pre-checked"],
    ["select"],
    ["textarea"]
  ])("matches snapshot", async variant => {
    await global.page.goto(
      `http://host.docker.internal:3123/iframe.html?id=components-input--${variant}`
    );
    await page.waitForSelector("html.hydrated");
    const previewHtml = await page.$("div#root");
    expect(await previewHtml.screenshot()).toMatchImageSnapshot();
  });
});
