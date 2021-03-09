import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'scale-components',
  globalStyle: 'src/global/scale.css',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'fonts/TeleNeoWeb', dest: 'build/fonts/TeleNeoWeb', warn: true },
        { src: '../../design-tokens/dist/*', dest: 'build/', warn: true },
        { src: './html/*', dest: './', warn: true },
      ],
    },
  ],
};
