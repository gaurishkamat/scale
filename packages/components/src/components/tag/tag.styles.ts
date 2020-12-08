import { JssStyle } from 'jss';

export const styles: JssStyle = {
  tag: {
    outline: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: ({ type }) => type.size_3,
    lineHeight: ({ type }) => type.leading_5,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'baseline',
    borderRadius: 4,
    transition: 'all 0.15s ease-in-out',
    background: ({ palette }) => palette.gray,
    color: ({ palette }) => palette.white,
    '--icon-color': ({ palette }) => palette.white,
    padding: '0 10px',
    fontWeight: ({ type }) => type.weight_bold,
    border: '1px solid transparent',
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
    '& button': {
      padding: 0,
      margin: 0,
      marginLeft: 2,
      background: 'transparent',
      border: 'none',
      height: '24px',
      outline: 'none',
      borderRadius: 4,
      cursor: 'pointer',

      '&:focus': {
        boxShadow: ({ color }) => `0 0 0 2px ${color.focus}`,
        background: 'black',
        border: '1px solid white',
        '& scale-icon': {
          position: 'relative',
          top: -1,
        },
      },
      '&:hover': {
        background: 'black',
      },
    },
    '& scale-icon': {
      '& svg': {
        outline: 'none',
      },
    },
  },
  'tag--size-small': {
    padding: '0 8px',
    fontSize: ({ type }) => type.size_2,
    lineHeight: ({ type }) => type.leading_6,
    '&$tag--dismissable': {
      paddingRight: 0,
      '& button': {
        height: '20px',
      },
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
      border: '1px solid white',
    },
    '&$tag--variant-secondary': {
      background: ({ palette }) => palette.secondary,
      '&:hover': {
        background: ({ palette }) => palette.secondary,
      },
      '&:focus': {
        background: ({ palette }) => palette.secondary,
        border: '1px solid white',
      },
    },
  },
  'tag--disabled': {
    color: '#A4A4A4',
    background: ({ palette }) => palette.grayDisabledBackground,
    '--icon-color': '#A4A4A4',
    cursor: 'not-allowed',
    '& button': {
      background: ({ palette }) => palette.grayDisabledBackground,
      cursor: 'not-allowed',
      '&:hover': {
        background: ({ palette }) => palette.grayDisabledBackground,
        cursor: 'not-allowed',
      },
    },
  },
};
