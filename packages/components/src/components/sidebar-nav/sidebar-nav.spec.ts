import { newSpecPage } from '@stencil/core/testing';
import { SidebarNav } from './sidebar-nav';

describe('SidebarNav', () => {
  let page: any;
  let component: any;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [SidebarNav],
      html: `<div></div>`,
    });
    component = page.doc.createElement('scale-sidebar-nav');
    page.root.appendChild(component);
  });
  it('should match snapshot', async () => {
    expect(page.root).toMatchSnapshot();
  });
});
