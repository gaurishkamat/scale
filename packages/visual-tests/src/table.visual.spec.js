describe("Table", () => {
  test.each([["standard"], ["small"], ["with-sorting-icons"]])(
    "matches snapshot",
    async variant => {
      await global.page.goto(
        `http://host.docker.internal:3123/iframe.html?id=components-table--${variant}`
      );
      await page.waitForSelector("html.hydrated");
      const previewHtml = await page.$("div#root");
      expect(await previewHtml.screenshot()).toMatchImageSnapshot();
    }
  );
});
