import { newE2EPage } from '@stencil/core/testing';

describe('scale-sidebar-nav', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<scale-sidebar-nav/>');
    const element = await page.find('scale-sidebar-nav');
    expect(element).toHaveClass('hydrated');
  });
});
