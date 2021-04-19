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
import { Button } from './button';

describe('Button', () => {
  let element;

  beforeEach(async () => {
    beforeEach(async () => {
      element = new Button();
    });
  });

  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<scale-button>Label</scale-button>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should handle css classes', () => {
    element.size = 'small';
    expect(element.getCssClassMap()).toContain('button--size-small');

    element.variant = 'primary';
    expect(element.getCssClassMap()).toContain('button--variant-primary');

    element.disabled = true;
    expect(element.getCssClassMap()).toContain('button--disabled');
  });
});
