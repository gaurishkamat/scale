# Custom styles

## Theming Scale

Use this option if you want to change the look of all components of the came type e.g. `Card`

```javascript
// main.ts

const { useTheme } = require('@scaleds/components-telekom/dist/theme.esm.js')

useTheme({
    components: {
        Card: { // <-- Component selector
            card: { // <-- className override
                background: 'purple', // <-- jss styles
                padding: '1rem' // <-- jss styles
            },
            card__body: { // <-- className override
                background: 'yellow' // <-- jss styles
            }
        },
        Input: {
            ...
        }
    }
})
```

## Local overrides

Use this option if you want to change the look of a single instance of a component

### Inline

```html
<!-- App.vue -->

<scale-card v-bind:styles="JSON.stringify({card: {color: 'red'}})">
    A tile
</scale-card>
```

### As data

```html
<!-- App.vue -->

<scale-card v-bind:styles="cardStyles">
    A tile
</scale-card>
```
```javascript
// App.vue

export default Vue.extend({
    name: "app",
    data: () => ({
        cardStyles: JSON.stringify({
            card: { // <-- className override
                color: 'red' // <-- jss styles
            }
        })
    })
});
```

