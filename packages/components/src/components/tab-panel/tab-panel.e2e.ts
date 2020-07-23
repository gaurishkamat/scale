import { newE2EPage } from '@stencil/core/testing';

describe('scale-tab-panel4', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<scale-tab-panel/>');
    const element = await page.find('scale-tab-panel');
    expect(element).toHaveClass('hydrated');
  });
});
