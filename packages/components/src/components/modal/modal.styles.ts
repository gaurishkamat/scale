import { JssStyle } from 'jss';

const columnWidth = 56; // TODO currently not in `spacing` tokens, need to revise with design

export const styles: JssStyle = {
  modal: {
    position: 'fixed',
    zIndex: 100,
    boxSizing: 'border-box',
    display: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    bottom: 0,
    width: '100%',
    paddingLeft: ({ spacing }) => spacing[4],
    paddingRight: ({ spacing }) => spacing[4],
    background: 'rgba(108, 108, 108, 0.7)', // 'rgba(35,0,18,0.67)',

    '&$modal--is-open': {
      display: 'flex',
    },
  },

  // Do not remove, these create the hash selectors
  'modal--is-open': {},
  'modal--has-scroll': {},
  'modal--has-body': {},
  'modal--has-actions': {},
  'modal--align-actions-left': {},
  'modal--align-actions-right': {},
  'modal--size-small': {},
  'modal--size-default': {},
  'modal--size-large': {},

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
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 'auto',
    overflowY: 'auto',
    maxHeight: ({ spacing }) => `calc(100vh - (2 * ${spacing[9]}))`,
    backgroundColor: 'white',
    borderRadius: ({ radii }) => radii.modal,
    boxShadow: ({ shadow }) => shadow.modal,

    '& $modal__body-wrapper': {
      flexShrink: '1',
      overflowY: 'auto',
    },

    // Rudimentarily simulating the grid
    '$modal--size-small &': {
      maxWidth: ({ spacing }) =>
        `calc((6 * ${columnWidth}px) + (5 * ${spacing.gutter}))`,
    },
    '$modal--size-default &': {
      maxWidth: ({ spacing }) =>
        `calc((8 * ${columnWidth}px) + (7 * ${spacing.gutter}))`,
    },
    '$modal--size-large &': {
      maxWidth: ({ spacing }) =>
        `calc((12 * ${columnWidth}px) + (11 * ${spacing.gutter}))`,
    },

    /* Accessibility: more space for "mobile landscape" */
    '@media (max-height: 30em)': {
      maxHeight: ({ spacing }) => `calc(100vh - (2 * ${spacing[4]}))`,
    },

    /* Accessibility: Windows High Contrast Mode transparent border */
    '&:after': {
      content: '""',
      display: 'block',
      boxSizing: 'border-box',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: '1px solid transparent',
      borderRadius: ({ radii }) => radii.modal,
      pointerEvents: 'none',
    },
  },

  modal__header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexShrink: '0',
    marginLeft: ({ spacing }) => spacing[5],
    marginRight: ({ spacing }) => spacing[5],
    paddingTop: ({ spacing }) => spacing[5],
    paddingBottom: ({ spacing }) => spacing[5],

    '$modal--has-scroll &': {
      borderBottom: ({ size, color }) =>
        `${size.divider}px solid ${color.divider}`,
    },
  },

  modal__heading: {
    margin: 0,
    fontFamily: ({ type }) => type.family,
    fontSize: ({ type }) => type.size_4,
    fontWeight: ({ type }) => type.weight_extrabold,
  },

  // This could be `scale-button`, but we don't have such variant
  // (`secondary`) without border, I think we should add it
  'modal__close-button': {
    appearance: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    border: 0,
    borderRadius: ({ radii }) => radii.button,
    outline: 'none',
    cursor: 'pointer',
    userSelect: 'none',
    boxSizing: 'border-box',
    transition: ({ transition }) => transition.generic,
    padding: ({ spacing }) => spacing[2],
    // Take care of position and outer spacing because padding
    marginBottom: ({ spacing }) => `calc(2 * -${spacing[2]})`,
    transform: ({ spacing }) => `translate(${spacing[2]}, -${spacing[2]})`,

    '&:focus': {
      boxShadow: ({ size, color }) =>
        `0 0 0 ${size.border_focus}px ${color.focus}`,
    },
    '&:hover': {
      color: ({ color }) => color.primary_hover,
    },
    '&:active': {
      color: ({ color }) => color.primary_active,
    },
  },

  'modal__body-wrapper': {
    paddingLeft: ({ spacing }) => spacing[5],
    paddingRight: ({ spacing }) => spacing[5],

    '$modal--has-body &': {
      minHeight: ({ spacing }) => spacing[7],
    },
  },

  modal__body: {
    '$modal--has-body &': {
      /* These should collapse with tags like p, that's what we want */
      marginTop: ({ spacing }) => spacing[5],
      marginBottom: ({ spacing }) => spacing[5],
    },
  },

  modal__actions: {
    display: 'none',
    justifyContent: 'flex-end',
    flexShrink: '0',
    padding: ({ spacing }) => spacing[5],

    '& ::slotted(*)': {
      marginLeft: ({ spacing }) => spacing[2],
    },

    '$modal--has-actions &': {
      display: 'flex',
    },

    '$modal--align-actions-left &': {
      justifyContent: 'flex-start',
    },

    '$modal--has-scroll &': {
      backgroundColor: ({ background }) => background.light,
    },
  },
};
