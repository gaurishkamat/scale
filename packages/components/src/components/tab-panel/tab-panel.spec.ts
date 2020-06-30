import { newSpecPage } from '@stencil/core/testing';
import { TabPanel } from './tab-panel';

describe('TabPanel', () => {
  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [TabPanel],
      html: `<scale-tab-panel></scale-tab-panel>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
