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
import { Checkbox } from './checkbox';

describe('Checkbox', () => {
  it('should match snapshot', async () => {
    const page = await newSpecPage({
      components: [Checkbox],
      html: `<scale-checkbox></scale-checkbox>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
