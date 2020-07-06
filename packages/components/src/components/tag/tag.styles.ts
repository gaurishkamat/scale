import { JssStyle } from 'jss';

const tagSecondary = {
  background: '#00739F',
  border: '1px solid #00739F',
};

export const styles: JssStyle = {
  tag: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'baseline',
    borderRadius: 4,
    transition: 'all 0.15s ease-in-out',
    background: '#343a40',
    color: ' #fff',
    '--icon-color': '#fff',
    padding: '4px 10px',
    fontFamily: 'TeleNeoWeb-Bold',
    '& scale-icon': {
      marginLeft: 5,
    },
    '&:not($tag--disabled)': {
      '& scale-icon': {
        '&:hover': {
          '--icon-color': 'red',
        },
      },
    },
  },
  'tag--dismissable': {
    paddingRight: 6,
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
  'tag--variant-secondary': tagSecondary,
  'tag--link': {
    textDecoration: 'none',
    '&$tag--variant-secondary': {
      ...tagSecondary,
      '&:hover': tagSecondary,
      '&:focus': tagSecondary,
    },
  },
  'tag--disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
};
