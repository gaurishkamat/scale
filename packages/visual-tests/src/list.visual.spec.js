describe("List", () => {
  test.each([["standard"], ["type-circle"], ["type-decimal"], ["type-icon"]])(
    "matches snapshot",
    async variant => {
      await global.page.goto(
        `http://host.docker.internal:3123/iframe.html?id=components-list--${variant}`
      );
      await page.waitForSelector("html.hydrated");
      const previewHtml = await page.$("div#root");
      expect(await previewHtml.screenshot()).toMatchImageSnapshot();
    }
  );
});
