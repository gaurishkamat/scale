import { newSpecPage } from '@stencil/core/testing';
import { Icon } from './icon';

describe('Icon', () => {
  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [Icon],
      html: `<scale-icon path="m 10 10"></scale-icon>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
