import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'scale-components',
  // globalScript: './global', // For web-animations?
  globalStyle: 'src/global/scale.css',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: '../build/theme', dest: 'build/theme', warn: true },
        { src: '../../design-tokens/dist/*', dest: 'build/', warn: true },
        { src: './html/*', dest: './', warn: true },
      ],
    },
  ],
};
