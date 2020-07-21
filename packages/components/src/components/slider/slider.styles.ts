import { JssStyle } from 'jss';

export const styles: JssStyle = {
  slider: {
    display: 'block',
    alignItems: 'center',
    width: '100%',
    '& .slider--track-wrapper': {
      display: 'flex',
      alignItems: 'center',
    },
    '& .slider--track': {
      width: '400px', // slider track size should have a fix number not percentage otherwise when dragging, the track flickers
      height: 8,
      margin: '16px 0',
      backgroundColor: '#ebeef5',
      borderRadius: 3,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    '& .slider--bar': {
      height: 8,
      backgroundColor: ({ colors }) => colors.primary.default,
      borderTopLeftRadius: 3,
      borderBottomLeftRadius: 3,
      position: 'absolute',
    },
    '& .slider--thumb-wrapper': {
      height: 36,
      width: 36,
      position: 'absolute',
      zIndex: 100,
      marginLeft: -4,
      backgroundColor: 'transparent',
      textAlign: 'center',
      userSelect: 'none',
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        cursor: 'grab',
      },
    },
    '& .slider--thumb': {
      width: 16,
      height: 16,
      border: '2px solid',
      borderColor: ({ colors }) => colors.primary.default,
      backgroundColor: '#fff',
      borderRadius: '50%',
      transition: 'all 0.2s',
      userSelect: 'none',
      '&:hover': {
        transform: 'scale(1.2)',
      },
    },
    '& .slider--display-value': {
      marginLeft: 24,
    },
  },
  'slider--disabled': {
    '& .slider--track-wrapper': {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
    '& .slider--bar': {
      backgroundColor: 'grey',
    },
    '& .slider--thumb': {
      display: 'none',
    },
    '& .slider--thumb-wrapper': {
      '&:hover': {
        cursor: 'not-allowed',
      },
    },
  },
};
