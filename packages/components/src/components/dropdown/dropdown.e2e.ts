import { newE2EPage } from '@stencil/core/testing';

describe('scale-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<scale-dropdown/>');
    const element = await page.find('scale-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});
