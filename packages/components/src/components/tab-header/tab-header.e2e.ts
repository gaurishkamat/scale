import { newE2EPage } from '@stencil/core/testing';

describe('scale-tab-nav', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<scale-tab-nav/>');
    const element = await page.find('scale-tab-nav');
    expect(element).toHaveClass('hydrated');
  });
});
