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

import { newSpecPage } from '@stencil/core/testing';
import { LogoSvg } from './logo-svg';

describe('component prop snapshots', () => {
  let page: any;
  let component: any;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [LogoSvg],
      html: `<div></div>`,
    });
    component = page.doc.createElement('scale-logo-svg');
    page.root.appendChild(component);
  });

  const language:
    | 'de'
    | 'en'
    | 'cz'
    | 'hr'
    | 'hu'
    | 'me'
    | 'mk'
    | 'ro'
    | 'sk'
    | 'laimOff' = 'en';
  const size: number = 36;
  const color: string = 'magenta';

  describe('all props', () => {
    it('are not set', async () => {
      await page.waitForChanges();
      expect(page.rootInstance.language).toBe(language);
      expect(page.rootInstance.size).toBe(size);
      expect(page.rootInstance.color).toBe(color);
      expect(page.root).toMatchSnapshot();
    });
    it('are set', async () => {
      const setLanguage = 'hr';
      const setSize = 100;
      const setColor = 'black';
      const setAccessibilityTitle = 'title';

      component.language = setLanguage;
      component.size = setSize;
      component.color = setColor;
      component.accessibilityTitle = setAccessibilityTitle;

      await page.waitForChanges();
      expect(page.rootInstance.language).toBe(setLanguage);
      expect(page.rootInstance.accessibilityTitle).toBe(setAccessibilityTitle);
      expect(page.rootInstance.size).toBe(setSize);
      expect(page.rootInstance.color).toBe(setColor);

      expect(page.root).toMatchSnapshot();
    });
  });
});

describe('testing colors', () => {
  let page: any;
  let component: any;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [LogoSvg],
      html: `<div></div>`,
    });
    component = page.doc.createElement('scale-logo-svg');
    page.root.appendChild(component);
  });
  it('magenta', async () => {
    const setColor = 'magenta';
    component.color = setColor;
    await page.waitForChanges();
    expect(page.rootInstance.color).toBe(setColor);
  });
  it('black', async () => {
    const setColor = 'white';
    component.color = setColor;
    await page.waitForChanges();
    expect(page.rootInstance.color).toBe(setColor);
  });
});

describe('testing all languages', () => {
  let page: any;
  let component: any;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [LogoSvg],
      html: `<div></div>`,
    });
    component = page.doc.createElement('scale-logo-svg');
    page.root.appendChild(component);
  });
  it('de', async () => {
    const setLanguage = 'de';
    component.language = setLanguage;
    await page.waitForChanges();
    expect(page.rootInstance.language).toBe(setLanguage);
    expect(page.root).toMatchSnapshot();
  });
  it('en', async () => {
    const setLanguage = 'en';
    component.language = setLanguage;
    await page.waitForChanges();
    expect(page.rootInstance.language).toBe(setLanguage);
    expect(page.root).toMatchSnapshot();
  });
  it('cz', async () => {
    const setLanguage = 'cz';
    component.language = setLanguage;
    await page.waitForChanges();
    expect(page.rootInstance.language).toBe(setLanguage);
    expect(page.root).toMatchSnapshot();
  });
  it('hr', async () => {
    const setLanguage = 'hr';
    component.language = setLanguage;
    await page.waitForChanges();
    expect(page.rootInstance.language).toBe(setLanguage);
    expect(page.root).toMatchSnapshot();
  });
  it('hu', async () => {
    const setLanguage = 'hu';
    component.language = setLanguage;
    await page.waitForChanges();
    expect(page.rootInstance.language).toBe(setLanguage);
    expect(page.root).toMatchSnapshot();
  });
  it('me', async () => {
    const setLanguage = 'me';
    component.language = setLanguage;
    await page.waitForChanges();
    expect(page.rootInstance.language).toBe(setLanguage);
    expect(page.root).toMatchSnapshot();
  });
  it('mk', async () => {
    const setLanguage = 'mk';
    component.language = setLanguage;
    await page.waitForChanges();
    expect(page.rootInstance.language).toBe(setLanguage);
    expect(page.root).toMatchSnapshot();
  });
  it('ro', async () => {
    const setLanguage = 'ro';
    component.language = setLanguage;
    await page.waitForChanges();
    expect(page.rootInstance.language).toBe(setLanguage);
    expect(page.root).toMatchSnapshot();
  });
  it('', async () => {
    const setLanguage = '';
    component.language = setLanguage;
    await page.waitForChanges();
    expect(page.rootInstance.language).toBe(setLanguage);
    expect(page.root).toMatchSnapshot();
  });
  it('sk', async () => {
    const setLanguage = 'sk';
    component.language = setLanguage;
    await page.waitForChanges();
    expect(page.rootInstance.language).toBe(setLanguage);
    expect(page.root).toMatchSnapshot();
  });
});
