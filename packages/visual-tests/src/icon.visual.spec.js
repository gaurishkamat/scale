describe("Icon", () => {
  test.each([["standard"], ["with-path-attribute"], ["with-name-attribute"]])(
    "matches snapshot",
    async variant => {
      await global.page.goto(
        `http://host.docker.internal:3123/iframe.html?id=components-icon--${variant}`
      );
      await page.waitForSelector("html.hydrated");
      const previewHtml = await page.$("div#root");
      expect(await previewHtml.screenshot()).toMatchImageSnapshot();
    }
  );
});
