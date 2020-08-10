describe("Link", () => {
  test.each([["standard"], ["disabled"], ["with-icon"]])(
    "matches snapshot",
    async variant => {
      await global.page.goto(
        `http://host.docker.internal:3123/iframe.html?id=components-link--${variant}`
      );
      await page.waitForSelector("html.hydrated");
      const previewHtml = await page.$("div#root");
      expect(await previewHtml.screenshot()).toMatchImageSnapshot();
    }
  );
});
