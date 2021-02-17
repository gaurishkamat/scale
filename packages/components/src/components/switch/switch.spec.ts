import { newSpecPage } from '@stencil/core/testing';
import { Switch } from './switch';

describe('Switch', () => {
  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [Switch],
      html: `<scale-switch></scale-switch>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
