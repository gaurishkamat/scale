import { newSpecPage } from '@stencil/core/testing';
import { Text } from './text';

describe('Text', () => {
  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [Text],
      html: `<scale-text>Label</scale-text>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
