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
  'modal--has-actions': {},

  modal__backdrop: {
    position: 'absolute',
    zIndex: 0,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },

  modal__window: {
    position: 'relative',
    zIndex: 1,
    width: 500,
    height: 'auto',
    marginTop: 80,
    marginBottom: 80,
    backgroundColor: 'white',
  },

  modal__actions: {
    display: 'none',
    border: '1px solid gold',

    '$modal--has-actions &': {
      display: 'flex',
    },
  },
};
