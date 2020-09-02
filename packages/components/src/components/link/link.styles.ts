import { JssStyle } from 'jss';

export const styles: JssStyle = {
  link: {
    fontFamily: 'TeleNeoWeb-Medium',
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    textDecoration: 'none',
    outline: 'none',
    cursor: 'pointer',
    padding: 0,
    fontSize: 16,
    fontWeight: 500,
    color: '#007DB3',
    '--icon-color': '#007DB3',
    '& scale-icon': {
      marginLeft: 4,
    },
    '&:hover&:not($link--disabled)': {
      color: '#007DB3',
      '--icon-color': '#007DB3',
    },
    '&:visited&:not($link--disabled)': {
      color: ({ palette }) => palette.secondary,
      '--icon-color': ({ palette }) => palette.secondary,
    },
  },
  'link--underline': {
    '&:hover:not($link--disabled)': {
      textDecoration: 'none',
      borderBottom: `1px solid #007DB3`,
    },
    '&:focus:not($link--disabled)': {
      borderBottom: `2px solid #007DB3`,
    },
  },
  'link--disabled': {
    cursor: 'not-allowed',
    color: ({ palette }) => palette.grayDisabledText,
  },
  'link--block': {
    display: 'flex',
  },
  'link--variant-primary': {
    color: '#409eff',
    '--icon-color': '#409eff',
  },
  'link--variant-success': {
    color: '#67c23a',
    '--icon-color': '#67c23a',
  },
  'link--variant-warning': {
    color: '#e6a23c',
    '--icon-color': '#e6a23c',
  },
  'link--variant-danger': {
    color: '#f56c6c',
    '--icon-color': '#f56c6c',
  },
  'link--variant-info': {
    color: '#909399',
    '--icon-color': '#909399',
  },
};
