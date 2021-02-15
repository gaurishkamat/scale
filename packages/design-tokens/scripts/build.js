#!/usr/bin/env node

import { join } from 'path';
import fs from 'fs-extra';
import flatten from 'lodash/flatten.js';
import getTokens from '../src/tokens.js';
import { generateCSS } from './output-css.js';

const FILENAME = 'design-tokens-telekom';
const OUTPUT_PATH = './dist';

main();

async function main() {
  await fs.emptyDir(OUTPUT_PATH);
  await fs.mkdirp(OUTPUT_PATH);

  const outputs = [generateCSS];

  try {
    const data = outputs.map((fn) => {
      const tokens = getTokens(); // fresh tokens for each iteration
      return fn(tokens);
    });

    // Write a file for each output
    await Promise.all(
      flatten(data).map(async ({ ext, suffix = '', content }) => {
        await fs.writeFile(
          join(OUTPUT_PATH, `${FILENAME}${suffix}.${ext}`),
          content
        );
      })
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
