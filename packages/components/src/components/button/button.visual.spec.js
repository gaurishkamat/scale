const recursiveFindInFrames = async (inputFrame, selector) => {
  const frames = inputFrame.childFrames();
  const results = await Promise.all(
    frames.map(async (frame) => {
      const el = await frame.$(selector);
      if (el) {
        return el;
      }
      if (frame.childFrames().length > 0) {
        return await recursiveFindInFrames(frame, selector);
      }
      return null;
    })
  );
  return results.filter(Boolean);
};

describe('Button tests', () => {
  it('matches snapshot', async () => {
    await global.page.goto(
      'http://host.docker.internal:3000/components/button/'
    );

    await new Promise((resolve) => {
      setTimeout(resolve, 5000);
    });

    const mainFrame = global.page.mainFrame();

    const elements = await recursiveFindInFrames(mainFrame, 'html.hydrated');

    for (let i = 0; i < elements.length; i++) {
      expect(await elements[i].screenshot()).toMatchImageSnapshot();
    }
  });
});
