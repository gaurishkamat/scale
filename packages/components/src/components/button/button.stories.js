import { storiesOf } from '@storybook/html'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import { withActions } from '@storybook/addon-actions'
import { h } from 'jsx-dom'

import readme from './readme.md'

storiesOf('Scale Button', module)
    .addDecorator(withActions('onClick'))
    .addDecorator(withKnobs)
    .add(
        'Default',
        () => {
            const label = text('label', 'Label');
            const optionsVariant = {
                'Default': '',
                'Primary': 'primary',
                'Secondary': 'secondary',
                'Success': 'success',
                'Error': 'error',
                'Warning': 'warning',
                'Info': 'info'
            }
            const variant = select('Variant', optionsVariant, 'Default')
            return (
            <scale-button
                variant={variant}
            >{label}</scale-button>
            )
        },
        {
            notes: {
                markdown: readme,
            }
        }
    )