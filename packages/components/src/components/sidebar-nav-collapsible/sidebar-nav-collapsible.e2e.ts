import { newE2EPage } from '@stencil/core/testing';

describe('scale-sidebar-nav-collapsible', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<scale-sidebar-nav-collapsible/>');
    const element = await page.find('scale-sidebar-nav-collapsible');
    expect(element).toHaveClass('hydrated');
  });
});
