import { newSpecPage } from '@stencil/core/testing';
import { SidebarNavItem } from './sidebar-nav-item';

describe('SidebarNavItem', () => {
  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [SidebarNavItem],
      html: `<scale-sidebar-nav-item></scale-sidebar-nav-item>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
