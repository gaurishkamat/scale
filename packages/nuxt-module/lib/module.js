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

const path = require("path");
const fs = require("fs");

const { Transform } = require("stream");
const { THEME_MAGIC_STRING } = require("@scaleds/components-telekom/dist/theme");

const transformedHydrateFilePath = path.join(__dirname, "/hydrate.js");

function getTransformer(theme) {
  return new Transform({
    transform(chunk, encoding, callback) {
      const chunkString = chunk.toString();

      this.push(
        !chunkString.includes(`'${THEME_MAGIC_STRING}'`)
          ? chunkString
          : chunkString.replace(
              `'${THEME_MAGIC_STRING}'`,
              JSON.stringify(theme)
            )
      );

      callback();
    }
  });
}

function decorateStoreWithUserTheme(transformer) {
  return new Promise((resolve, reject) => {
    fs.createReadStream(require.resolve("@scaleds/components-telekom/hydrate/index.js"))
      .pipe(transformer)
      .pipe(fs.createWriteStream(transformedHydrateFilePath))
      .on("finish", resolve)
      .on("error", reject);
  });
}

module.exports = async function(moduleOptions) {
  const options = {
    ...this.options["scaled"],
    ...moduleOptions
  };

  this.addPlugin({
    src: path.resolve(__dirname, "plugin.js"),
    fileName: "plugin.js",
    options
  });

  await decorateStoreWithUserTheme(getTransformer(options.theme));

  const { renderToString } = require(transformedHydrateFilePath);

  // @Hook: render:route
  this.nuxt.hook("render:route", async (url, page) => {
    const { html } = await renderToString(page.html, { url });
    page.html = html;
  });

  // @Hook: generate:page
  this.nuxt.hook("generate:page", async page => {
    const { html } = await renderToString(page.html, {
      url: page.path
    });

    page.html = html;
  });
};

module.exports.meta = require("../package.json");
