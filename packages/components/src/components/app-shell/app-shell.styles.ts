import { JssStyle } from 'jss';

const contentPadding = {
  '& $content': {
    paddingTop:
      'calc(var(--header-brand-collapsed-height) + var(--header-nav-height))',
  },
};

export const styles: JssStyle = {
  content: {
    background: '#fff',
  },
  shell: {
    '--header-brand-height': '72px',
    '--header-brand-collapsed-height': '4px',
    '--header-nav-height': '56px',
    '--header-transition-speed': '0.3s',
    '--header-border-radius': '8px',
    '@media (max-width: 1023px)': {
      ...contentPadding,
    },
  },
  '@media (min-width: 1024px)': {
    shell: {
      '&.sticky': {
        ...contentPadding,
      },
    },
    content: {
      paddingTop: 'calc(var(--header-brand-height) + var(--header-nav-height))',
      transition: 'padding-top var(--header-transition-speed) ease-in-out',
    },
  },
};
