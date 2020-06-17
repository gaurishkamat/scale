export const styles = {
    breadcrumb: {
        marginLeft: '-0.4em',
        '& ol': {
            listStyle: 'none',
            paddingLeft: 0,
            marginTop: 0,
            marginBottom: 0,
            display: 'flex',
        },
        '& li': {
            display: 'inline-flex',
            alignItems: 'center',
            marginRight: '0.125ch',
        },
    },
    separator: {
        display: 'flex',
        marginLeft: '0.125ch',
    },
    item: {
        padding: '0.4em',
    },
    link: {
        textDecoration: 'none',
        padding: '0.4em',
        borderRadius: 8,
        border: '2px solid transparent',
        color: ({ colors }) => colors.text.default,
        '&:hover': {
            color: '#F90984',
        },
        '&:active': {
            color: '#CB0068',
        },
        '&:focus': {
            borderColor: '#009DE0',
            outline: 'none',
        },
    },
    current: {
        fontWeight: ({ typography }) => typography.fontWeightBold,
    },
};
