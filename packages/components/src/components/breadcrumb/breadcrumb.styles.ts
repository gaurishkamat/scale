import { JssStyle } from 'jss';

export const styles: JssStyle = {
  breadcrumb: {
    marginLeft: ({ spacings }) => spacings.minusPointFour,
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
    padding: ({ spacings }) => spacings.pointFour,
  },
  link: {
    textDecoration: 'none',
    padding: ({ spacings }) => spacings.pointFour,
    borderRadius: ({ shape }) => shape.borderRadius,
    border: '2px solid transparent',
    color: ({ palette }) => palette.gray,
    '&:hover': {
      color: ({ palette }) => palette.magentaHover,
    },
    '&:active': {
      color: ({ palette }) => palette.magentaActive,
    },
    '&:focus': {
      borderColor: ({ palette }) => palette.borderActive,
      outline: 'none',
    },
  },
  current: {
    fontFamily: 'TeleNeoWeb-ExtraBold',
  },
};
