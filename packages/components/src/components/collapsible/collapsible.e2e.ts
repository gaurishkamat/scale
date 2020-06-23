import { newE2EPage } from '@stencil/core/testing';

describe('scale-collapsible', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<scale-collapsible></scale-collapsible>');
    const element = await page.find('scale-collapsible');
    expect(element).toHaveClass('hydrated');
  });
});
