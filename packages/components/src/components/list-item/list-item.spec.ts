import { newSpecPage } from '@stencil/core/testing';
import { ListItem } from './list-item';

describe('ListItem', () => {
  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [ListItem],
      html: `<scale-list-item>default</scale-list-item>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
