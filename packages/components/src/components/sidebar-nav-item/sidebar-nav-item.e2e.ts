import { newE2EPage } from '@stencil/core/testing';

describe('scale-sidebar-nav-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<scale-sidebar-nav-item/>');
    const element = await page.find('scale-sidebar-nav-item');
    expect(element).toHaveClass('hydrated');
  });
});
