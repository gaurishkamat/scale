import { JssStyle } from 'jss';

export const styles: JssStyle = {
  '@global': {
    ':host(scale-item)': {
      display: 'block',
    },
  },

  'list-item': {
    '&::before': {
      content: '""',
      marginRight: ({ spacing }) => spacing.inline,
    },
  },

  'list-item--unordered': {
    '&::before': {
      display: 'inline-block',
      width: 8,
      height: 8,
      borderRadius: '50%',
      transform: 'scale(0.66)',
      background: 'currentColor',
    },
  },

  'list-item--ordered': {
    '&::before': {
      content: 'attr(data-index) "."',
      fontWeight: ({ type }) => type.weight_bold,
    },
  },

  'list-item--nested': {
    // ..
  },

  'list-item__nested-list': {
    // ..
  },
};
