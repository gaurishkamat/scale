import { newE2EPage } from '@stencil/core/testing';

describe('scale-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<scale-checkbox/>');
    const element = await page.find('scale-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
