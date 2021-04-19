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

const { useTheme } = require("@scaleds/components-telekom/dist/theme");

export default async function(moduleOptions) {
  if (process.client) {
    const {
      defineCustomElements,
      applyPolyfills
    } = require("@scaleds/components-telekom/loader");

    // Bind the custom elements to the window object
    applyPolyfills().then(() => {
      defineCustomElements(window);
      useTheme(<%= serialize(options.theme) %>);
    });
  }
}
