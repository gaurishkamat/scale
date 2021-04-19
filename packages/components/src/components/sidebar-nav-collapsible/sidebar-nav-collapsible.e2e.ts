/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

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
