import { newSpecPage } from '@stencil/core/testing';
import { SidebarNav } from './sidebar-nav';

describe('SidebarNav', () => {
  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [SidebarNav],
      html: `<scale-sidebar-nav></scale-sidebar-nav>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
