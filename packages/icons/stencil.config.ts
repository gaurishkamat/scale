import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'scale-icons',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'scale-icons.json', warn: true }
      ]
    },
    {
      type: 'dist-custom-elements-bundle'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    }
  ]
};
