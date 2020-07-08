import { Config } from '@stencil/core';
import { reactOutputTarget } from '@nowseemee/stencil-react-output-target';

export const config: Config = {
  testing: {
    testRegex: '/src/.*\\.spec\\.(ts|tsx)$',
  },
  namespace: 'scale-components',
  globalScript: './global',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@scaleds/components-telekom',
      proxiesFile: '../components-react/src/components.ts',
      excludeComponents: ['animatable-component', 'animatable-cube']
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: '../build/theme' , dest: '..', warn: true},
        { src: 'fonts' }
      ]
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: '../build/theme' , dest: 'build/theme', warn: true},
        { src: 'header.html', warn: true},
        { src: 'form.html', warn: true},
        { src: 'fonts' }
      ]
    },
    {
      type: 'docs-json',
      file: './dist/scale-components.json'
    },
    { type: 'dist-hydrate-script' }
  ]
}
