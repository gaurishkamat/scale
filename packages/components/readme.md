# Scale Components

## Local development

```bash
# get dependencies
yarn

# build assets
yarn build

# start development mode
yarn develop
```
and then in a new terminal session
```bash
yarn storybook
```

## Component development


### Useful commands
See the `scripts` section inside `package.json` for a list of all available commands

#### Testing
|Command|Description|
|---|---|
|`yarn test` |Run all tests|
|`yarn test component-name` |Run all tests for a specific component|
|`yarn test:watch` |Run all tests in watch mode|
|`yarn test -u`|Run all tests and update snapshots|
|`yarn test --coverage`|Run all tests and show coverage|
|`yarn test:visual`|Run all visual tests|

> Some test commands can be combined e.g. `yarn test -u --coverage`

#### Format & lint
|Command|Description|
|---|---|
|`yarn format` |Run formatter on all supported files|
|`yarn lint` |Run linter for all supported files|

#### Before you push
In order to satisfy the `CI` pipeline it is advised to run some scripts before pushing your changes to remote. Here some crutial ones:

`yarn format`
`yarn lint`
`yarn test -u`

> If any of the above commands throw an error, please fix the errors before pushing to remote

### Component blueprint

When building a new component it may be helpful to rely on this blueprint to get started

`components/src/example/example.tsx`

```typescript
import { Component, h, Prop, Listen, State, Host } from '@stencil/core';
import classNames from 'classnames';
import { StyleSheet } from 'jss';
import { CssClassMap } from '../../utils/utils';
import { CssInJs } from '../../utils/css-in-js';
import Base from '../../utils/base-interface';
import { styles } from './example.styles';

@Component({
  tag: 'example',
})
export class Example implements Base {
  stylesheet: StyleSheet;
  @CssInJs('Example', styles)
  @Prop() styles?: StyleSheet;
  @Prop() customClass?: string = '';

  componentWillLoad() {}
  componentWillUpdate() {}
  componentDidUnload() {}

  render() {
    return (
      <Host>
        <style>{this.stylesheet.toString()}</style>
        <div class={this.getCssClassMap()}>
          Content goes here...
        </div>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(
      classes.example,
      this.customClass && this.customClass,
    );
  }
}
```

`components/src/example/example.styles.ts`

```typescript
import { JssStyle } from 'jss';

export const styles: JssStyle = {
  'example': {
    background: '#fff',
    color: '#333'
  }
}
```

## Theming

Scale uses `css-in-js` and particular [`jss`](http://jss.com) as it's styling solution. 

### Default theme
The default theme can be found under `src/theme/defaultTheme.ts`

## Using a custom theme

### Using the theme in a HTML file

```html
<html>
    ...
    <!-- Include theme helper  -->
    <script src="/build/theme/theme.iife.js"></script>

    <!-- Include components  -->
    <script type="module" src="/build/scale-components.esm.js"></script>
    <script nomodule src="/build/scale-components.js"></script>
    <script>
      // Applying changes to theme
      scale.useTheme({
        shape: {
          borderRadius: 24
        },
        components: {
          Button: {
            button: {
              background: 'purple',
            }
          }
        }
      })
    </script>
    <body>
      <h3 id="title">Button</h3>
      <scale-button>Click!</scale-button>
    </body>
    <script>
      // Getting current theme values
      const { colors } = scale.getTheme()
      
      document.getElementById('title').style.color = colors.primary.default
    </script>
</html>
```

### Using the theme in a React app

Modifying existing theme, preferrably in `index.(jsx|tsx)`

```tsx
const { useTheme } = require('@scaleds/components/dist/theme')

useTheme({
  shape: {
    borderRadius: 24
  },
  components: {
    Button: {
      button: {
        background: 'purple',
      }
    }
  }
})
```

Using current theme values 

```tsx
import React from 'react';
import { ScaleButton } from '@scaleds/components-react';

const { colors } = require('@scaleds/components/dist/theme').getTheme()

const App: React.FC = () => (
  <div className="app">
    <h3 style={{ color: colors.primary.default }}>
      Button
    </h3>
    <ScaleButton variant="primary">Click!</ScaleButton>
  </div>
);
```

### Using the theme in a Angular app

Modifying existing theme, preferrably in `main.ts`

```tsx
const { useTheme } = require('@scaleds/components/dist/theme')

useTheme({
  shape: {
    borderRadius: 24
  },
  components: {
    Button: {
      button: {
        background: 'purple',
      }
    }
  }
})
```

Using current theme values 

`app.component.ts`

```ts
import { Component } from '@angular/core';
const { colors } = require('@scaleds/components/dist/theme').getTheme()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'boilerplate-angular';
  colors = colors
}

```

`app.component.html`

```html
<div>
    <h3 style="color: {{colors.primary.default}}">Button</h3>
    <scale-button>Click!</scale-button>
</div>
```

### Using the theme in a Vue app

Modifying existing theme, preferrably in `main.ts`

```tsx
const { useTheme } = require('@scaleds/components/dist/theme.esm.js')

useTheme({
  shape: {
    borderRadius: 24
  },
  components: {
    Button: {
      button: {
        background: 'purple',
      }
    }
  }
})
```

Using current theme values 

`App.vue`

```ts
<template>
  <div>
    <h3 v-bind:style="`color: ${colors.primary.default}`">
      Button
    </h3>
    <scale-button>Click!</scale-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
const { colors } = require('@scaleds/components/dist/theme.esm.js').getTheme()

export default Vue.extend({
  name: "app",
  data: () => ({
    colors
  })
});
</script>

```