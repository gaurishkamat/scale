![Scale The Telekom Digital Design System](assets/scale-banner.png)
Scale is the Telekom Digital Design System for products and experiences. It helps you build your online products faster and create superior experiences with ease. With production-ready components in code and design, a centrally accessible library and comprehensive documentation, Scale gives you everything you need to make it happen. Scale is currently an open beta. 

The Scale UI components are customizable and written in `TypeScript`. Simply replace the default `theme` if you want to represent the corporate identity of a dedicated brand.

[![Scale badge](https://user-content.gitlab-static.net/376a8c0895adde2b9c040c2637e0c073fe366f0b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f74656c656b6f6d2d7363616c652d2532336532303037342e737667)](https://user-content.gitlab-static.net/376a8c0895adde2b9c040c2637e0c073fe366f0b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f74656c656b6f6d2d7363616c652d2532336532303037342e737667) [![GitHub License](https://user-content.gitlab-static.net/c157b3f97237128f7b5ee42d0364696ed37c1eae/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f74656c656b6f6d2f7363616c652e7376673f7374796c653d666c61742d737175617265)](https://user-content.gitlab-static.net/c157b3f97237128f7b5ee42d0364696ed37c1eae/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f74656c656b6f6d2f7363616c652e7376673f7374796c653d666c61742d737175617265) 

# Welcome to Scale

Access the [complete documentation of Scale](https://www.brand-design.telekom.com/scale/) on [Telekom Brand & Design](https://www.brand-design.telekom.com/).

## Setup with NPM

Install the Scale component library in your project with NPM or Yarn:

```
npm install @scaleds/components-telekom
```

Please note that the Telekom brand assets, logos, magenta, typeface and icons as well as the footer and header components are protected under a [special license to use for Telekom Products only](https://github.com/telekom/scale/packages/components/src/telekom/LICENSE).

**MIT Version**

We provide a package for the open-source community. The Scale default package uses a neutral theme and is fully covered by the MIT license.

```
npm install @scaleds/components
```

To use the components, you need to load a CSS file and some JavaScript. The CSS file includes the fonts and design tokens.

### Plain HTML

```bash
<link rel="stylesheet" href="node_modules/@scaleds/components-telekom/dist/scale-components/scale-components.css">
<script type="module" src="node_modules/@scaleds/components-telekom/dist/scale-components/scale-components.js"></script>
```

**MIT Version**

```bash
<link rel="stylesheet" href="node_modules/@scaleds/components/dist/scale-components/scale-components.css">
<script type="module" src="node_modules/@scaleds/components/dist/scale-components/scale-components.js"></script>
```

####

### With a bundler or ES modules

```bash
import "@scaleds/components-telekom/dist/scale-components/scale-components.css";
import { applyPolyfills, defineCustomElements } from "@scaleds/components-telekom/loader";

applyPolyfills().then(() => {
  defineCustomElements(window);
});
```

**MIT Version**

```bash
import "@scaleds/components/dist/scale-components/scale-components.css";
import { applyPolyfills, defineCustomElements } from "@scaleds/components/loader";

applyPolyfills().then(() => {
  defineCustomElements(window);
});
```


### Monorepo Packages Overview

| Package Name       | Description                                                |
| ------------------ | ---------------------------------------------------------- |
| components         | Stencil components                                         |
| components-angular | Component proxies for Angular (auto-generated)             |
| components-react   | Component proxies for React (auto-generated)               |
| components-sketch  | Component templates for Sketch generation (auto-generated) |
| components-vue     | Component proxies for Vue (auto-generated)                 |
| design-token       | Design tokens                                              |
| generator-sketch   | Sketch generator                                           |
| html-to-sketch     | Component template Sketch conversion utilities             |
| storybook-vue      | Our Storybook                                              |
| visual-tests       | Visual Snapshot Testing                                    |

### NPM Packages

| Package Name                        | Description                   |
| ----------------------------------- | ----------------------------- |
| @scaleds/components-telekom         | Stencil components            |
| @scaleds/components-react-telekom   | Component proxies for React   |
| @scaleds/components-vue-telekom     | Component proxies for Vue     |
| @scaleds/components-angular-telekom | Component proxies for Angular |

**MIT Version**

| Package Name                | Description                   |
| --------------------------- | ----------------------------- |
| @scaleds/components         | Stencil components            |
| @scaleds/components-react   | Component proxies for React   |
| @scaleds/components-vue     | Component proxies for Vue     |
| @scaleds/components-angular | Component proxies for Angular |

## Frameworks

- [Scale and Vue](https://www.brand-design.telekom.com/scale/?path=/story/scale-for-developers-scale-and-vue--page)
- [Scale and Angular](https://www.brand-design.telekom.com/scale/?path=/story/scale-for-developers-scale-and-angular--page)
- [Scale and React](https://www.brand-design.telekom.com/scale/?path=/story/scale-for-developers-scale-and-react--page)

**MIT Version**

- [Vue Boilerplate](https://github.com/telekom/scale/examples/boilerplate-vue)
- [Angular Boilerplate](https://github.com/telekom/scale/examples/boilerplate-angular)
- [React Boilerplate](https://github.com/telekom/scale/examples/boilerplate-react)

---

[Find our comprehensive documentation on Storybook](https://www.brand-design.telekom.com/scale/)

[Find Scale on GitHub](https://github.com/telekom/scale)

## Local development

## Get dependencies

```bash
yarn
```

## Build assets

```bash
yarn build
```

## Start development mode

```bash
yarn start
```

## Component development

## Useful commands

See the `scripts` section inside `package.json` for a list of all available commands

### Testing

| Command                           | Description                            |
| --------------------------------- | -------------------------------------- |
| `yarn test --spec`                | Run all tests                          |
| `yarn test --spec component-name` | Run all tests for a specific component |
| `yarn test --spec --watch`        | Run all tests in watch mode            |
| `yarn test --spec -u`             | Run all tests and update snapshots     |
| `yarn test --spec--coverage`      | Run all tests and show coverage        |
| `yarn test --e2e`                 | Run all visual tests                   |

> Some test commands can be combined e.g. `yarn test -u --coverage`

### Format & lint

| Command       | Description                          |
| ------------- | ------------------------------------ |
| `yarn format` | Run formatter on all supported files |
| `yarn lint`   | Run linter for all supported files   |

### Before you push

In order to satisfy the `CI` pipeline it is advised to run some scripts before pushing your changes to remote. Here some crucial ones:

`yarn format`
`yarn lint`
`yarn test --spec --e2e -u`

> If any of the above commands throw an error, please fix the errors before pushing to remote

## Adding the components to Storybook

- Create new folder in packages/storybook-vue/stories/3_components
- Create new dummy Vue component enlisting all props and events
- Create stories
- Add placeholder English and German md files and register them in .storybook/usage-addon/usage.js for the Docs tab to work.
- You might have to delete storybook-vue/node_modules/.cache to see your changes
- Restart storybook to test

## Adding visual snapshot tests

- Switch to packages/visual-tests
- Add the test for the new component - take a previous test as an example
- Run the tests, check if the new snapshot looks as expected
- Check in the new snapshot image to git
