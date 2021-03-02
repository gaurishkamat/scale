import { newE2EPage } from '@stencil/core/testing';

describe('scale-text-field', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<scale-text-field/>');
    const element = await page.find('scale-text-field');
    expect(element).toHaveClass('hydrated');
  });
});
