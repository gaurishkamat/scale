import { JssStyle } from 'jss';

export const styles: JssStyle = {
  tag: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '24px',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'baseline',
    borderRadius: 4,
    transition: 'all 0.15s ease-in-out',
    background: ({ palette }) => palette.gray,
    color: ({ palette }) => palette.white,
    '--icon-color': ({ palette }) => palette.white,
    padding: '0px 10px',
    fontFamily: 'TeleNeoWeb-Bold',
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
    paddingRight: 2,
  },
  'tag--size-small': {
    padding: '4px 8px',
    fontSize: 12,
    '& scale-icon': {
      height: 12,
      width: 12,
    },
    '&$tag--dismissable': {
      paddingRight: 4,
    },
  },
  'tag--variant-secondary': {
    background: ({ palette }) => palette.secondary,
    border: ({ palette }) => `1px solid ${palette.secondary}`,
    '&$tag--disabled': {
      background: ({ palette }) => palette.secondary,
      color: ({ palette }) => palette.white,
      '--icon-color': ({ palette }) => palette.white,
      border: 'none',
      opacity: '0.5',
    },
  },
  'tag--link': {
    textDecoration: 'none',
    '&$tag--variant-secondary': {
      background: ({ palette }) => palette.secondary,
      border: ({ palette }) => `1px solid ${palette.secondary}`,
      '&:hover': {
        background: ({ palette }) => palette.secondary,
        border: ({ palette }) => `1px solid ${palette.secondary}`,
      },
      '&:focus': {
        background: ({ palette }) => palette.secondary,
        border: ({ palette }) => `1px solid ${palette.secondary}`,
      },
    },
  },
  'tag--disabled': {
    color: ({ palette }) => palette.grayDisabledText,
    background: ({ palette }) => palette.grayDisabledBackground,
    '--icon-color': ({ palette }) => palette.grayDisabledText,
    cursor: 'not-allowed',
  },
};
