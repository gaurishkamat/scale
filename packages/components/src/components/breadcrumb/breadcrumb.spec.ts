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
import { Breadcrumb } from './breadcrumb';
// import { styles } from './breadcrumb.styles';
// import jss from 'jss';

describe('Breadcrumb', () => {
  /* let element;
  let stylesheet;
  beforeEach(async () => {
    element = new Breadcrumb();
    stylesheet = element.stylesheet = jss.createStyleSheet(styles as any);
  }); */

  it('should match snapshot', async () => {
    let component: any;
    const page = await newSpecPage({
      components: [Breadcrumb],
      html: `<div></div>`,
    });
    component = page.doc.createElement('scale-breadcrumb');
    page.root.appendChild(component);
    expect(page.root).toMatchSnapshot();
  });
});
