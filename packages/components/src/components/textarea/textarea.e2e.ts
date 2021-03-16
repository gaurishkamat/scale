import { newE2EPage } from '@stencil/core/testing';

describe('scale-textarea', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<scale-textarea/>');
    const element = await page.find('scale-textarea');
    expect(element).toHaveClass('hydrated');
  });
});
