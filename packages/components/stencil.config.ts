import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget, ComponentModelConfig } from '@nowseemee/vue-output-target';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';

const vueComponentModels: ComponentModelConfig[] = [
  {
    elements: ['scale-input'],
    event: 'scaleChange',
    targetAttr: 'value'
  },
  {
    elements: ['scale-slider'],
    event: 'scaleChange',
    targetAttr: 'value'
  },
]

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['scale-input'],
    event: 'scaleChange',
    targetAttr: 'value',
    type: 'text'
  },
  // Tests won't pass for these
  // https://github.com/ionic-team/stencil-ds-output-targets/blob/master/packages/example-project/component-library-angular/__tests__/my-checkbox.spec.ts
  /* {
    elementSelectors: ['scale-input[type=checkbox]'],
    event: 'scaleChange',
    targetAttr: 'checked',
    type: 'boolean'
  },
  {
    elementSelectors: ['scale-input[type=radio]'],
    event: 'scaleChange',
    targetAttr: 'checked',
    type: 'radio'
  },
  {
    elementSelectors: ['scale-input[type=select]'],
    event: 'scaleChange',
    targetAttr: 'value',
    type: 'select'
  }, */
  {
    elementSelectors: ['scale-slider'],
    event: 'scaleChange',
    targetAttr: 'value',
    type: 'number'
  }
]

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
  globalScript: './global',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@scaleds/components-telekom',
      proxiesFile: '../components-react/src/components.ts',
      excludeComponents: ['animatable-component', 'animatable-cube']
    }),
    vueOutputTarget({
      componentCorePackage: '@scaleds/components-telekom',
      proxiesFile: '../components-vue/src/proxies.ts',
      componentModels: vueComponentModels,
      excludeComponents: ['animatable-component', 'animatable-cube']
    }),
    angularOutputTarget({
      componentCorePackage: '@scaleds/components-telekom',
      directivesProxyFile: '../components-angular/src/directives/proxies.ts',
      directivesArrayFile: '../components-angular/src/directives/proxies-list.tsx',
      directivesUtilsFile: '../components-angular/src/directives/proxies-utils.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
      excludeComponents: ['animatable-component', 'animatable-cube'],
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: '../build/theme' , dest: '..', warn: true }
      ]
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'docs-vscode',
      file: 'custom-elements.json'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: '../build/theme', dest: 'build/theme' , warn: true },
        { src: 'header.html', warn: true },
      ]
    },
    {
      type: 'docs-json',
      file: './dist/scale-components.json'
    },
    { type: 'dist-hydrate-script' },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'components/icons/scale-icons.json', warn: true }
      ]
    },
  ]
}
