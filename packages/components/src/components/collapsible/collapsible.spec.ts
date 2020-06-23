import { newSpecPage } from '@stencil/core/testing';
import { Collapsible } from './collapsible';

describe('Collapsible', () => {
  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [Collapsible],
      html: `<scale-collapsible></scale-collapsible>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
