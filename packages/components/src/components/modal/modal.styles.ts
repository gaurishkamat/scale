import { JssStyle } from 'jss';

export const styles: JssStyle = {
  modal: {
    zIndex: 100,
    display: 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    height: 'calc(100% - 160px)',
    width: 'calc(100% - 32px)',
    margin: '80px 16px',
    alignItems: 'center',
  },
  'modal--opened': {
    display: 'flex',
  },
  'modal__scroll-container': {
    overflow: 'auto',
  },
  modal__content: {
    background: '#FFFFFF',
    // color: '#262626',
    borderRadius: '8px',
    boxShadow: ({ shadow }) => shadow.modal,
    maxHeight: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    zIndex: 100,
  },
  '@media (min-width: 1024px)': {
    'modal--size-small': {
      width: 'calc(100% - 62.5%)',
      margin: '80px 31.25%',
    },
    'modal--size-default': {
      width: 'calc(100% - 50%)',
      margin: '80px 25%',
    },
    'modal--size-large': {
      width: 'calc(100% - 25%)',
      margin: '80px 12.5%',
    },
  },

  modal__header: {
    fontSize: '1.25rem',
    // color: '#161616',
    margin: '0 1.5rem',
    padding: '1.5rem 0',
    lineHeight: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    '& ::slotted(*)': {
      fontSize: '1.25rem',
      // color: '#161616',
      margin: 0,
      fontWeight: ({ font }) => font.weight_extrabold,
    },
  },
  'modal__header-scroll': {
    borderBottom: '1px solid #dfdfdf',
  },
  modal__body: {
    padding: '1.5rem',
    lineHeight: '1.5',
    '& ::slotted(*)': {
      margin: 0,
    },
  },
  modal__close: {
    height: '24px',
    display: 'block',
    cursor: 'pointer',
    '& scale-icon-action-circle-close': {
      outline: 'none',
      borderRadius: '8px',
      padding: '10px',
      margin: '-10px',
      '&:hover': {
        color: ({ color }) => color.primary_hover,
      },
      '&:active': {
        color: ({ color }) => color.primary_active,
      },
      '&:focus': {
        boxShadow: ({ color }) => `0 0 0 2px ${color.focus}`,
      },
    },
  },
  modal__actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '1.5rem',
    borderRadius: '0 0 8px 8px',
  },
  'modal__actions-scroll': {
    background: ({ background }) => background.light,
  },
  modal__backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    background: 'rgba(108, 108, 108, 0.7)', // 'rgba(35,0,18,0.67)',
  },
};
