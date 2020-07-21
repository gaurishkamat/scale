# scale-shell



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute      | Description | Type     | Default |
| ------------------ | -------------- | ----------- | -------- | ------- |
| `addonNavigation`  | --             |             | `any[]`  | `[]`    |
| `customClass`      | `custom-class` |             | `string` | `''`    |
| `iconNavigation`   | --             |             | `any[]`  | `[]`    |
| `mainNavigation`   | --             |             | `any[]`  | `[]`    |
| `sectorNavigation` | --             |             | `any[]`  | `[]`    |


## Dependencies

### Depends on

- [scale-app-header](../app-header)

### Graph
```mermaid
graph TD;
  scale-app-shell --> scale-app-header
  scale-app-header --> app-mega-menu
  scale-app-header --> app-icon
  scale-app-header --> app-logo
  scale-app-header --> app-navigation-sector-mobile
  scale-app-header --> app-navigation-main-mobile
  app-navigation-main-mobile --> app-icon
  style scale-app-shell fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
