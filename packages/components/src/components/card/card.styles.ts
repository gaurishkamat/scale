import { JssStyle } from 'jss';
export const styles: JssStyle = {
  card: {
    boxSizing: 'border-box',
    overflow: 'hidden',
    background: ({ color }) => color.white,
    width: '100%',
    transition: ({ transition }) => transition.generic,
    borderRadius: ({ radii }) => radii.card,
    boxShadow: ({ shadow }) => shadow.card,
    border: 'none',
  },
  card__body: {
    padding: ({ spacing }) => spacing.box,
    '& ::slotted(*)': {
      margin: 0,
    },
  },
  'card--no-padding': {
    '& $card__body': {
      padding: 0,
    },
  },
  'card--interactive': {
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'block',
    outline: 'none',
    '&:hover': {
      boxShadow: ({ shadow }) => shadow.card_hover,
    },
    '&:focus': {
      boxShadow: ({ shadow, size, color }) =>
        `${shadow.card_hover},0 0 0 ${size.border_focus}px ${color.focus}`,
    },
    '&:active': {
      border: 'none',
      boxShadow: ({ shadow }) => shadow.card_active,
    },
    '& $card__body ::slotted(*)': {
      margin: 0,
    },
  },
  'card--disabled': {
    '&, &:hover, &:focus, &:active': {
      opacity: ({ opacity }) => opacity.disabled,
      cursor: 'not-allowed',
      outline: 'none',
    },
  },
};
