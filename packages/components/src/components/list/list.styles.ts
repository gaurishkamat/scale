import { JssStyle } from 'jss';

export const styles: JssStyle = {
  list: {
    paddingLeft: ({ spacing }) => spacing.flow,
  },
  // WIP This only works *without* `scale-list-item`
  'list--variant-ordered': {
    // listStyle: 'none',
    // paddingLeft: 0,
    // counterReset: 'scale-counter',
    '& ::slotted(li)': {
      counterIncrement: 'scale-counter',
    },
    '& ::slotted(li)::before': {
      content: 'counter(scale-counter) "."',
      fontWeight: ({ font }) => font.weight_bold,
      paddingRight: ({ spacing }) => spacing.inline,
    },
  },
};
