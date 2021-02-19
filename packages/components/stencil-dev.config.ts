import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'scale-components',
  // globalScript: './global', // For web-animations?
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: '../build/theme', dest: 'build/theme', warn: true },
        { src: './html/*', dest: './', warn: true },
      ],
    },
  ],
};
