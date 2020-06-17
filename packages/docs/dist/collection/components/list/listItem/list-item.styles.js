export const styles = {
    'list-item': {},
    'list-item--type': {
        listStyle: ({ type }) => type || 'square',
    },
    'list-item--has-icon': {
        listStyle: 'none !important',
        display: 'flex',
        alignItems: 'center',
        marginLeft: '-1.5rem',
    },
};
