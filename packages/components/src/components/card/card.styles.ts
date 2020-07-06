import { JssStyle } from 'jss';
export const styles: JssStyle = {
  card: {
    boxSizing: 'border-box',
    overflow: 'hidden',
    color: '#333',
    background: '#fff',
    width: '100%',
    maxWidth: 400,
    transition: 'all .2s ease-in-out',
    borderRadius: 8,
    boxShadow: [
      [0, 19, 18, 0, 'rgba(0,0,0, 0.05)'],
      [0, 8, 12, 0, 'rgba(0,0,0, 0.05)'],
      [0, 1, 5, 0, 'rgba(0,0,0, 0.04)'],
      [0, 0, 2, 0, 'rgba(0,0,0, 0.03)'],
    ],
    border: 'none',
  },
  card__body: {
    padding: 24,
    '& ::slotted(*)': {
      margin: 0,
    },
  },
  'card--interactive': {
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'block',
    '&:hover': {
      boxShadow: [
        [0, 24, 18, 0, 'rgba(0,0,0, 0.05)'],
        [0, 8, 12, 0, 'rgba(0,0,0, 0.05)'],
        [0, 1, 5, 0, 'rgba(0,0,0, 0.24)'],
        [0, 0, 2, 0, 'rgba(0,0,0, 0.03)'],
      ],
    },
    '&:focus': {
      boxShadow: [
        [0, 19, 18, 0, 'rgba(0,0,0, 0.10)'],
        [0, 8, 12, 0, 'rgba(0,0,0, 0.10)'],
        [0, 1, 5, 0, 'rgba(0,0,0, 0.08)'],
        [0, 0, 2, 0, 'rgba(0,0,0, 0.06)'],
      ],
    },
    '&:active': {
      border: 'none',
      boxShadow: [
        [0, 8, 18, 0, 'rgba(0,0,0, 0.05)'],
        [0, 1, 5, 0, 'rgba(0,0,0, 0.04)'],
        [0, 0, 2, 0, 'rgba(0,0,0, 0.03)'],
      ],
    },
    '& $card__body ::slotted(*)': {
      margin: 0,
    },
  },
  'card--disabled': {
    '&, &:hover, &:focus, &:active': {
      opacity: 0.5,
      cursor: 'not-allowed',
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.12)',
      outline: 'none',
    },
  },
};
