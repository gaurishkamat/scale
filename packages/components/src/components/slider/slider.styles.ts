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
      boxSizing: 'border-box',
      width: '303px', // slider track size should have a fix number not percentage otherwise when dragging, the track flickers
      height: 6,
      margin: '16px 0',
      border: '1px solid #6c6c6c',
      borderRadius: '100px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    '& .slider--bar': {
      height: 6,
      backgroundColor: ({ color }) => color.primary,
      borderRadius: '100px',
      position: 'absolute',
      zIndex: -1,
    },
    '& .slider--thumb-wrapper': {
      height: 32,
      width: 32,
      position: 'absolute',
      zIndex: 100,
      marginLeft: -16,
      backgroundColor: 'transparent',
      textAlign: 'center',
      userSelect: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': {
        cursor: 'grab',
      },
      '&:active': {
        cursor: 'grabbing',
      },
    },
    '& .slider--thumb': {
      boxSizing: 'border-box',
      width: 16,
      height: 16,
      border: '1px solid',
      borderColor: '#6c6c6c',
      backgroundColor: '#fff',
      borderRadius: '50%',
      userSelect: 'none',
      boxShadow: ({ shadow }) => shadow.ground,
      '&:hover': {
        borderColor: ({ color }) => color.primary_hover,
      },
      '&:active': {
        borderColor: ({ color }) => color.primary_active,
      },
    },
    '& .slider--display-value': {
      marginLeft: 24,
      fontFamily: 'TeleNeoWeb-Bold',
      fontSize: 12,
      color: '#6c6c6c',
    },
  },
  'slider--track-small': {
    '& .slider--track': {
      height: 1,
      border: 'none',
      backgroundColor: '#7c7c7c',
    },
    '& .slider--bar': {
      height: 3,
      zIndex: 1,
    },
  },
  'slider--thumb-large': {
    '& .slider--thumb': {
      width: 24,
      height: 24,
    },
  },
  'slider--disabled': {
    '& .slider--track-wrapper': {
      cursor: 'not-allowed',
    },
    '& .slider--bar': {
      backgroundColor: '#7c7c7c',
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
