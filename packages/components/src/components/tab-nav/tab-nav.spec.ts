import { newSpecPage } from '@stencil/core/testing';
import { TabNav } from './tab-nav';

describe('TabNav', () => {
  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [TabNav],
      html: `<scale-tab-nav></scale-tab-nav>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
