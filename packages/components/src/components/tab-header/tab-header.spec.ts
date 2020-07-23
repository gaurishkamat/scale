import { newSpecPage } from '@stencil/core/testing';
import { TabHeader } from './tab-header';

describe('TabHeaderg', () => {
  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [TabHeader],
      html: `<scale-tab-header></scale-tab-header>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
