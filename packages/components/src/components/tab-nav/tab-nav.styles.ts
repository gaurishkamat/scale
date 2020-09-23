import { JssStyle } from 'jss';

export const styles: JssStyle = {
  'tab-nav': {
    '& .tab-nav__list': {
      display: 'flex',
      borderBottom: ({ color }) => `1px solid ${color.divider}`,
      margin: '0',
      padding: '0',
    },
  },
};
