describe("Card", () => {
  test.each([["standard"], ["disabled"], ["long-text"]])(
    "matches snapshot",
    async variant => {
      await global.page.goto(
        `http://host.docker.internal:3123/iframe.html?id=components-card--${variant}`
      );
      await page.waitForSelector("html.hydrated");
      const previewHtml = await page.$("body");
      expect(await previewHtml.screenshot()).toMatchImageSnapshot();
    }
  );
});
