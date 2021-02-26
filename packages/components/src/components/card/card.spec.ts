import { newSpecPage } from '@stencil/core/testing';
import { Card } from './card';

describe('Card', () => {
  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<scale-card>Label</scale-card>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
