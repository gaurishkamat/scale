import { JssStyle } from 'jss';

export const styles: JssStyle = {
  'tab-panel': {
    paddingTop: ({ spacing }) => spacing[5],
  },

  'tab-panel--small': {
    paddingTop: ({ spacing }) => spacing[4],
  },
};
