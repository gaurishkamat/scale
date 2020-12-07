# scale-shell



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description | Type     | Default |
| ------------------ | ------------------- | ----------- | -------- | ------- |
| `activeRouteId`    | `active-route-id`   |             | `string` | `''`    |
| `activeSectorId`   | `active-sector-id`  |             | `string` | `''`    |
| `addonNavigation`  | `addon-navigation`  |             | `any`    | `[]`    |
| `brandTitle`       | `brand-title`       |             | `string` | `''`    |
| `claimLang`        | `claim-lang`        |             | `string` | `'de'`  |
| `customClass`      | `custom-class`      |             | `string` | `''`    |
| `iconNavigation`   | `icon-navigation`   |             | `any`    | `[]`    |
| `mainNavigation`   | `main-navigation`   |             | `any`    | `[]`    |
| `portalName`       | `portal-name`       |             | `string` | `''`    |
| `sectorNavigation` | `sector-navigation` |             | `any`    | `[]`    |


## Dependencies

### Depends on

- [scale-app-header](../app-header)

### Graph
```mermaid
graph TD;
  scale-app-shell --> scale-app-header
  scale-app-header --> app-mega-menu
  scale-app-header --> scale-icon
  scale-app-header --> app-logo
  scale-app-header --> app-navigation-sector-mobile
  scale-app-header --> app-navigation-main-mobile
  app-navigation-main-mobile --> scale-icon
  style scale-app-shell fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
