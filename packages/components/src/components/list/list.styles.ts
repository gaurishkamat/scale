import { JssStyle } from 'jss';

export const styles: JssStyle = {
  list: {
    paddingLeft: 0,
  },

  'list--nested': {
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: ({ spacing }) => spacing[2],
  },

  'list--type-ordered': {},
};
