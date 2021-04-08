import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import { frameworkTargets } from './framework-targets';
import { inlineSvg } from 'stencil-inline-svg';

export const config: Config = {
  testing: {
    testRegex: '/src/.*\\.(spec|e2e)\\.(ts|tsx)$',
    collectCoverageFrom: [
      '**/src/**/*.{ts,tsx}',
      '!**/node_modules/**',
      '!**/*.{d,esm,iife,styles}.ts',
    ],
  },
  namespace: 'scale-components',
  globalScript: 'src/global/scale.ts',
  globalStyle: 'src/global/scale.css',
  plugins: [
    inlineSvg(),
    postcss({
      plugins: [], // TODO
    }),
  ],
  outputTargets: [
    ...frameworkTargets,
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'fonts/TeleNeoWeb', warn: true },
        { src: 'components/icons/scale-icons.json', warn: true },
      ],
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'fonts/TeleNeoWeb', dest: 'build/fonts/TeleNeoWeb', warn: true },
        { src: '../../design-tokens/dist/*', dest: 'build/', warn: true },
        { src: './html/*', dest: './', warn: true },
      ],
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-vscode',
      file: 'custom-elements.json',
    },
    {
      type: 'docs-json',
      file: './dist/scale-components.json',
    },
    { type: 'dist-hydrate-script' },
  ],
};
