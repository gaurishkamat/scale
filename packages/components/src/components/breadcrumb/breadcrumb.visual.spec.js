describe.skip('Breadcrumb tests', () => {
  test.each([['with-icon'], ['current-with-no-link']])(
    'matches snapshot when hovering',
    async story => {
      await global.page.goto(
        `http://host.docker.internal:3000/?path=/story/components-breadcrumb--${story}`
      );

      await page.waitForSelector('iframe#storybook-preview-iframe');

      const previewFrame = (await page.frames()).find(
        frame => frame.name() === 'storybook-preview-iframe'
      );

      await previewFrame.waitForSelector('html.hydrated');
      const previewHtml = await previewFrame.$('html');

      const link = await previewFrame.$('a');
      await link.hover();

      expect(await previewHtml.screenshot()).toMatchImageSnapshot();
    }
  );
});
