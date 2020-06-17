import { newE2EPage } from '@stencil/core/testing';

describe('scale-sidebar-nav-collapsible', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<scale-sidebar-nav-collapsible/>');
    const element = await page.find('scale-sidebar-nav-collapsible');
    expect(element).toHaveClass('hydrated');
  });

  it('toggles', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<scale-sidebar-nav-collapsible label="Label text" />'
    );
    const target = await page.find('scale-sidebar-nav-collapsible >>> ul');
    const button = await page.find('scale-sidebar-nav-collapsible >>> button');
    expect(button.textContent).toBe('Label text');
    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(target.getAttribute('hidden')).toBeDefined();
    button.click();
    await page.waitForChanges();
    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(target.getAttribute('hidden')).toBeNull();
  });
});
