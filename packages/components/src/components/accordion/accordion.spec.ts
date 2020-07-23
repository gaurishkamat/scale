import { newSpecPage } from '@stencil/core/testing';
import { Accordion } from './accordion';

describe('Accordion', () => {
  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [Accordion],
      html: `<scale-accordion></scale-accordion>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
