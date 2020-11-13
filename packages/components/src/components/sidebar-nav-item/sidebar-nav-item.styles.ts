import { JssStyle } from 'jss';

import { padding } from '../sidebar-nav/sidebar-nav.styles';

export const styles: JssStyle = {
  'sidebar-nav-item': {
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: ({ colors }) => colors.grey['300'],
    '& ::slotted(a)': {
      display: 'block',
      textDecoration: 'none',
      color: 'currentColor',
      borderRadius: 2,
      ...padding.normal,
    },
    '& ::slotted(a:hover)': {
      color: '#E20074',
    },
    '& ::slotted(a:focus)': {
      outline: 'none',
      boxShadow: 'inset 0 0 0 2px #009DE0',
    },
    '& ::slotted(a:active)': {
      color: '#CB0068',
    },
  },
  'sidebar-nav-item--current': {
    color: '#E20074',
  },
  'sidebar-nav-item--bold': {
    fontWeight: ({ type }) => type.weight_bold,
  },
  'sidebar-nav-item--condensed': {
    borderBottomWidth: 0,
    '& ::slotted(a)': {
      borderWidth: 0,
      ...padding.condensed,
    },
  },
};
