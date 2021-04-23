import { newSpecPage } from '@stencil/core/testing';
import { Shell } from './app-shell';

describe('Shell', () => {
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [Shell],
      html: `<scale-app-shell></scale-app-shell>`,
    });
  });
  it('should match snapshot', async () => {
    expect(page.root).toMatchSnapshot();
  });
});
