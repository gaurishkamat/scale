import { newE2EPage } from '@stencil/core/testing';

describe('scale-radio-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<scale-radio-button/>');
    const element = await page.find('scale-radio-button');
    expect(element).toHaveClass('hydrated');
  });
});
