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
import { ProgressBar } from './progress-bar';

describe('ProgressBar', () => {
  let element;
  beforeEach(async () => {
    element = new ProgressBar();
  });

  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [ProgressBar],
      html: `<scale-progress-bar>Label</scale-progress-bar>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should have css property width 24px when stroke width is set to 24', async () => {
    const page = await newSpecPage({
      components: [ProgressBar],
      html: `<scale-progress-bar stroke-width=24>Label</scale-progress-bar>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should contain progress-bar-text css class when show text is set true', async () => {
    const page = await newSpecPage({
      components: [ProgressBar],
      html: `<scale-progress-bar show-status=true>Label</scale-progress-bar>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should contain progress-bar-inner-text css class when text inside is set true', async () => {
    const page = await newSpecPage({
      components: [ProgressBar],
      html: `<scale-progress-bar text-inside=true>Label</scale-progress-bar>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should handle css classes', () => {
    element.hasError = true;
    expect(element.getCssClassMap()).toContain('progress-bar--has-error');
  });
});
