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
import { Input } from './input';

describe('Input', () => {
  let element;
  beforeEach(async () => {
    element = new Input();
  });

  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [Input],
      html: `<scale-input></scale-input>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should handle css classes', () => {
    element.type = 'number';
    expect(element.getCssClassMap()).toContain('input--type-number');
  });
});
