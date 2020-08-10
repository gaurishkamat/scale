describe("Accordion", () => {
  test.each([["standard"]])("matches snapshot", async variant => {
    await global.page.goto(
      `http://host.docker.internal:3123/iframe.html?id=components-accordion--${variant}`
    );
    await page.waitForSelector("html.hydrated");
    const previewHtml = await page.$("div#root");

    const firstButton = await page.evaluateHandle(
      `document.querySelector("#root > scale-accordion > scale-collapsible:nth-child(1) > div > div:nth-child(1) > button")`
    );
    await firstButton.click();

    expect(await previewHtml.screenshot()).toMatchImageSnapshot();
  });
});
