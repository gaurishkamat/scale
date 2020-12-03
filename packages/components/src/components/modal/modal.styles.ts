import { JssStyle } from 'jss';

export const styles: JssStyle = {
  modal: {
    position: 'fixed',
    zIndex: 100,
    display: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    bottom: 0,
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    opacity: 0,
    background: 'rgba(108, 108, 108, 0.7)', // 'rgba(35,0,18,0.67)',

    '&$modal--is-open': {
      display: 'flex',
      opacity: 1,
    },
  },

  'modal--is-open': {},

  modal__window: {
    width: 500,
    height: 'auto',
    marginTop: 80,
    marginBottom: 80,
    border: '1px solid gold',
    backgroundColor: 'white',
  },
};
