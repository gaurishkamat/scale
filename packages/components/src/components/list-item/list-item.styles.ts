import { JssStyle } from 'jss';

export const styles: JssStyle = {
  '@global': {
    ':host(scale-list-item)': {
      display: 'block',
    },
  },

  'list-item': {
    position: 'relative',
    fontSize: ({ type }) => type.size_3,
    lineHeight: ({ type }) => type.leading_5,
    paddingLeft: ({ spacing }) => `calc(0.25ch + ${spacing[4]})`,

    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
    },
  },

  'list-item--nested': {},

  'list-item--unordered': {
    '&::before': {
      boxSizing: 'border-box',
      display: 'block',
      top: '0.5em',
      width: ({ spacing }) => spacing[2],
      height: ({ spacing }) => spacing[2],
      borderRadius: '50%',
      transform: 'scale(0.66)',
      background: 'currentColor',
    },

    '$list-item--nested&::before': {
      background: 'transparent',
      border: '1px solid currentColor',
    },
  },

  'list-item--ordered': {
    '&::before': {
      content: 'attr(data-index) "."',
      fontSize: ({ type }) => type.size_3,
      fontWeight: ({ type }) => type.weight_bold,
    },
    
    '$list-item--nested&::before': {
      fontSize: ({ type }) => type.size_2,
      paddingTop: ({ spacing }) => `calc(0.5 * ${spacing[1]})`,
    },
  },

  'list-item--no-marker': {
    display: 'inline-flex',
    alignItems: 'center',
    paddingLeft: 0,

    '&::before': {
      display: 'none',
    },

    '& > ::slotted(*)': {
      marginRight: ({ spacing }) => spacing[2],
    },
  },

  'list-item__nested-list': {},
};
