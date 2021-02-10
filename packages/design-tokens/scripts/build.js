#!/usr/bin/env node

import { join } from 'path';
import fs from 'fs-extra';
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
    // Write a file for each output
    await Promise.all(
      outputs.map(async (fn) => {
        const tokens = getTokens(); // fresh tokens for each iteration
        const { ext, content } = fn(tokens);

        await fs.writeFile(join(OUTPUT_PATH, `${FILENAME}.${ext}`), content);
      })
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
