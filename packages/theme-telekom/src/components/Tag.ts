import { JssStyle } from "jss";

const tagSecondary = {
    background: '#00739F',
    border: '1px solid #00739F'
}

export const Tag: JssStyle = {
    tag: {
        padding: '4px 10px',
        fontFamily: 'TeleGrotesk Next Bold',
        '& scale-icon': {
            marginLeft: 5
        },
    },
    'tag--dismissable': {
        paddingRight: 6,
    },
    'tag--variant-secondary': tagSecondary,
    'tag--link': {
        '&$tag--variant-secondary': {
            ...tagSecondary,
            '&:hover': tagSecondary,
            '&:focus': tagSecondary
        },
    }
};
