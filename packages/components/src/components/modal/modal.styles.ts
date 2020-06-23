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
    color: '#161616',
    borderRadius: '8px',
    boxShadow:
      '0 19px 18px 0 rgba(0,0,0,0.05), 0 8px 12px 0 rgba(0,0,0,0.05), 0 1px 5px 0 rgba(0,0,0,0.04), 0 0 2px 0 rgba(0,0,0,0.03)',
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
    color: '#161616',
    margin: '0 1.5rem',
    padding: '1.5rem 0',
    lineHeight: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    '& ::slotted(*)': {
      fontSize: '1.25rem',
      color: '#161616',
      margin: 0,
      fontWeight: 'bold',
    },
  },
  'modal__header-scroll': {
    borderBottom: '1px solid #dfdfdf',
  },
  modal__body: {
    padding: '1.5rem',
    lineHeight: '1.5',
  },
  modal__close: {
    height: '24px',
    display: 'block',
    cursor: 'pointer',
  },
  modal__actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '1.5rem',
    background: '#F4F4F4',
    borderRadius: '0 0 8px 8px',
  },
  modal__backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    background: 'rgba(35,0,18,0.67)',
  },
};
