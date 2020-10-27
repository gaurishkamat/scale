import { JssStyle } from 'jss';

export const styles: JssStyle = {
  tag: {
    outline: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    lineHeight: '24px',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'baseline',
    borderRadius: 4,
    transition: 'all 0.15s ease-in-out',
    background: ({ palette }) => palette.gray,
    color: ({ palette }) => palette.white,
    '--icon-color': ({ palette }) => palette.white,
    padding: '0 10px',
    fontWeight: ({ font }) => font.weight_bold,
    '& scale-icon': {
      marginLeft: 2,
    },
    '&:not($tag--disabled)': {
      '& scale-icon': {
        '&:hover': {
          '--icon-color': ({ palette }) => palette.magentaActive,
        },
      },
    },
  },
  'tag--dismissable': {
    paddingRight: 0,
    '& scale-icon': {
      cursor: 'pointer',
      '& svg': {
        outline: 'none',
        borderRadius: 4,
        '&:hover': {
          background: 'black',
        },
        '&:focus': {
          boxShadow: ({ color }) => `0 0 0 2px ${color.focus}`,
          background: 'black',
        },
      },
    },
  },
  'tag--size-small': {
    padding: '0 8px',
    fontSize: 12,
    lineHeight: '20px',
    '&$tag--dismissable': {
      paddingRight: 0,
    },
  },
  'tag--variant-secondary': {
    background: ({ palette }) => palette.secondary,
    '&$tag--disabled': {
      background: ({ palette }) => palette.secondary,
      color: ({ palette }) => palette.white,
      '--icon-color': ({ palette }) => palette.white,
      opacity: '0.5',
    },
  },
  'tag--link': {
    textDecoration: 'none',
    '&:focus': {
      boxShadow: ({ color }) => `0 0 0 2px ${color.focus}`,
    },
    '&$tag--variant-secondary': {
      background: ({ palette }) => palette.secondary,
      '&:hover': {
        background: ({ palette }) => palette.secondary,
      },
      '&:focus': {
        background: ({ palette }) => palette.secondary,
      },
    },
  },
  'tag--disabled': {
    color: '#A4A4A4',
    background: ({ palette }) => palette.grayDisabledBackground,
    '--icon-color': '#A4A4A4',
    cursor: 'not-allowed',
  },
};
