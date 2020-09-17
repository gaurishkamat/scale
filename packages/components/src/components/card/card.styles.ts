import { JssStyle } from 'jss';
export const styles: JssStyle = {
  card: {
    boxSizing: 'border-box',
    overflow: 'hidden',
    background: ({ tokens }) => tokens.color.white,
    width: '100%',
    transition: ({ tokens }) => tokens.transition.generic,
    borderRadius: ({ tokens }) => tokens.radii.card,
    boxShadow: ({ tokens }) => tokens.shadow.card,
    border: 'none',
  },
  card__body: {
    padding: ({ tokens }) => tokens.spacing.box,
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
      boxShadow: ({ tokens }) => tokens.shadow.card_hover,
    },
    '&:focus': {
      boxShadow: ({ tokens }) =>
        `${tokens.shadow.card_hover},0 0 0 ${tokens.width.border_focus} ${tokens.color.focus}`,
    },
    '&:active': {
      border: 'none',
      boxShadow: ({ tokens }) => tokens.shadow.card_active,
    },
    '& $card__body ::slotted(*)': {
      margin: 0,
    },
  },
  'card--disabled': {
    '&, &:hover, &:focus, &:active': {
      opacity: ({ tokens }) => tokens.opacity.disabled,
      cursor: 'not-allowed',
      outline: 'none',
    },
  },
};
