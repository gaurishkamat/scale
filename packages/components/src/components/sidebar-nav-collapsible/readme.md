# scale-sidebar-nav-collapsible

We tried adding ::-moz-focus-inner for the button but JSS fails to parse that selector.

- https://developer.mozilla.org/en-US/docs/Web/CSS/::-moz-focus-inner
- https://stackoverflow.com/a/199319

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                                | Type      | Default     |
| ------------ | ------------- | ------------------------------------------ | --------- | ----------- |
| `bold`       | `bold`        | Bold label and icon                        | `boolean` | `false`     |
| `condensed`  | `condensed`   | Used normally for third level items        | `boolean` | `false`     |
| `href`       | `href`        | The URL where the link should point to     | `string`  | `'#'`       |
| `iconSize`   | `icon-size`   | The width and height of the icon in pixels | `number`  | `16`        |
| `isCurrent`  | `is-current`  | Label and icon get the active color        | `boolean` | `false`     |
| `isExpanded` | `is-expanded` | Set this to `true` to expand               | `boolean` | `undefined` |
| `label`      | `label`       | The text for the button                    | `string`  | `undefined` |
| `styles`     | `styles`      | (optional) Injected jss styles             | `any`     | `undefined` |
| `tag`        | `tag`         | The parent wrapper                         | `string`  | `'li'`      |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
