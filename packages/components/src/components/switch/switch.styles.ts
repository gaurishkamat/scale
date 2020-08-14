import { JssStyle } from 'jss';

export const styles: JssStyle = {
  switch: {
    margin: 0,
    width: 34,
    height: 14,
    padding: 2,
    display: 'inline-flex',
    position: 'relative',
    border: '1px solid #000',
    borderRadius: 10,
    backgroundColor: '#fff',
    cursor: 'pointer',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '&:after': {
      content: '""',
      position: 'absolute',
      top: 1,
      left: 1,
      borderRadius: '100%',
      width: 16,
      height: 16,
      backgroundColor: '#000',
    },
    '& .switch--off': {
      color: '#000',
      display: 'inline-flex',
      alignItems: 'center',
      width: 17,
      justifyContent: 'center',
    },
    '&:hover': {
      border: '1px solid #e20074',
      '&:after': {
        backgroundColor: '#e20074',
      },
    },
    ' &:focus': {
      outline: 'none',
      boxShadow: '0 0 0 2px #0081cb',
    },
    ' &:active': {
      background: '#CB0068',
      border: '1px solid #CB0068',
      color: '#fff',
      '&:after': {
        backgroundColor: '#fff',
      },
      '& .switch--off': {
        color: '#fff',
      },
    },
    ' &:active:hover': {
      background: '#CB0068',
      border: '1px solid #CB0068',
      color: '#fff',
      '&:after': {
        backgroundColor: '#fff',
      },
      '& .switch--off': {
        color: '#fff',
      },
    },
  },

  'switch--active': {
    borderColor: '#e20074',
    backgroundColor: '#e20074',
    justifyContent: 'flex-start',
    '&:hover': {
      borderColor: '#F90984',
      backgroundColor: '#F90984',
      '&:after': {
        backgroundColor: '#fff',
      },
    },
    ' &:focus': {
      outline: 'none',
      borderColor: '#CB0068',
      backgroundColor: '#CB0068',
      boxShadow: '0 0 0 2px #0081cb',
    },
    '&:after': {
      left: 'auto',
      right: 1,
      backgroundColor: '#fff',
    },
    '& .switch--on': {
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      width: 17,
      justifyContent: 'center',
    },
    ' &:active': {
      background: '#fff',
      color: '#CB0068',
      '&:after': {
        backgroundColor: '#CB0068',
      },
      '& .switch--on': {
        color: '#CB0068',
      },
    },
    ' &:active:hover': {
      background: '#fff',
      color: '#CB0068',
      '&:after': {
        backgroundColor: '#CB0068',
      },
      '& .switch--on': {
        color: '#CB0068',
      },
    },

    '& scale-icon': {
      '--icon-color': '#fff',
    },
  },
  'switch--disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
};
