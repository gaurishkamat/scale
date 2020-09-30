import { JssStyle } from 'jss';

export const styles: JssStyle = {
  'chart-stack': {
    color: ({ color }) => color.text,
    '& .header': {
      height: '24px',
      fontSize: '24px',
      fontFamily: 'TeleNeoWeb-ExtraBold',
      lineHeight: '26px',
      marginBottom: '24px',
    },
    '& .bar': {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '17px',
      '& .bar__item': {
        backgroundColor: '#216bff',
        height: '28px',
        flex: 1,
        '&:first-of-type': {
          borderTopLeftRadius: '5px',
          borderBottomLeftRadius: '5px',
        },
        '&:last-of-type': {
          borderTopRightRadius: '5px',
          borderBottomRightRadius: '5px',
        },
      },
    },
    '& .legend': {
      display: 'flex',
      flexDirection: 'column',
      height: '161px',
      '& .spacer': {
        padding: '0 0.5rem',
      },
      '& .legend__row__item': {
        display: 'flex',
        lineHeight: '32px',
      },
      '& .legend__row': {
        display: 'flex',
        justifyContent: 'space-between',
        '&:last-child': {
          paddingBottom: '2rem',
        },
      },
      '& .legend__item': {
        height: 10,
        width: 10,
        backgroundColor: '#216bff',
        borderRadius: '24px',
        alignSelf: 'center',
        margin: '0 6px 1px 0',
      },
      '& .legend__label': {
        fontFamily: 'TeleNeoWeb-Bold',
        fontSize: '17px',
        lineHeight: '32px',
      },
    },
  },
};
