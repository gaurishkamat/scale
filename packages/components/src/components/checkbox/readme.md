# scale-checkbox



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                                                              | Type               | Default     |
| ------------ | ------------- | ------------------------------------------------------------------------ | ------------------ | ----------- |
| `checked`    | `checked`     | (optional) Active switch                                                 | `boolean`          | `false`     |
| `controlled` | `controlled`  | (optional) Makes type `select` behave as a controlled component in React | `boolean`          | `false`     |
| `disabled`   | `disabled`    | (optional) Input disabled                                                | `boolean`          | `undefined` |
| `helperText` | `helper-text` | (optional) Input helper text                                             | `string`           | `''`        |
| `icon`       | `icon`        | (optional) Input checkbox checked icon                                   | `string`           | `undefined` |
| `inputId`    | `input-id`    | (optional) Input checkbox id                                             | `string`           | `undefined` |
| `label`      | `label`       | (optional) Input label                                                   | `string`           | `''`        |
| `name`       | `name`        | (optional) Input name                                                    | `string`           | `''`        |
| `status`     | `status`      | (optional) Input status                                                  | `string`           | `''`        |
| `styles`     | `styles`      | (optional) Injected CSS styles                                           | `string`           | `undefined` |
| `value`      | `value`       | (optional) Input value                                                   | `number \| string` | `''`        |


## Events

| Event         | Description                         | Type                                  |
| ------------- | ----------------------------------- | ------------------------------------- |
| `scaleChange` | Emitted when the value has changed. | `CustomEvent<InputChangeEventDetail>` |


## Dependencies

### Depends on

- [scale-icon](../icon)

### Graph
```mermaid
graph TD;
  scale-checkbox --> scale-icon
  style scale-checkbox fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
