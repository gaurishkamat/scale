import { JssStyle } from 'jss';

export const styles: JssStyle = {
  '@global': {
    ':host(scale-list-item)': {
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
      width: ({ spacing }) => spacing[2],
      height: ({ spacing }) => spacing[2],
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
