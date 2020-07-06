import { JssStyle } from 'jss';

const breakpoint = 1024;

const rounding = (bar: string, color: string, border?: string) => ({
  [`& .header__${bar}-before, & .header__${bar}-after`]: {
    content: '',
    position: 'absolute',
    backgroundColor: 'transparent',
    width: 'var(--header-border-radius)',
    height: 'calc(2 * var(--header-border-radius))',
    bottom: 'calc(-2 * var(--header-border-radius))',
    boxShadow: `0 calc(-1 * var(--header-border-radius)) 0 0 ${color}`,
    borderTop: border ? `1px solid ${border}` : 'transparent',
  },
  [`& .header__${bar}-before`]: {
    zIndex: '999999998',
    left: -1,
    borderTopLeftRadius: 'var(--header-border-radius)',
    borderLeft: border ? `1px solid ${border}` : 'transparent',
  },
  [`& .header__${bar}-after`]: {
    zIndex: '999999999',
    right: -1,
    borderTopRightRadius: 'var(--header-border-radius)',
    borderRight: border ? `1px solid ${border}` : 'transparent',
  },
});

const mainNavigationDesktop = {
  '& .main-navigation': {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    height: 'var(--header-nav-height)',
    alignItems: 'center',
    marginLeft: 'calc(-50px - 1rem)',
    transition: 'margin-left var(--header-transition-speed) ease-in-out',
    '& .main-navigation__item': {
      paddingLeft: 16,
      paddingRight: 16,
      height: '100%',
      '&:first-child': {
        paddingLeft: 0,
      },
      '&:hover .mega-menu': {
        opacity: 1,
        pointerEvents: 'visible',
      },
      '& .main-navigation__item-link': {
        textDecoration: 'none',
        color: '#000',
        fontFamily: 'TeleNeoWeb-ExtraBold',
        fontSize: '20px',
        lineHeight: '24px',
        transition: 'all .2s ease-in-out',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
          color: '#e20074',
        },
      },
    },
  },
};

const metaNavigation = {
  '& .meta-navigation': {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    padding: 0,
    '& .meta-navigation__item-link': {
      display: 'flex',
      alignItems: 'center',
      color: '#000',
      textDecoration: 'none',
      fontFamily: 'TeleNeoWeb-Bold',
      transition: 'all .2s ease-in-out',
    },
  },
};

const metaNavigationMobile = {
  '& .meta-navigation': {
    '& .meta-navigation__item': {},
    '& .meta-navigation__item-link': {
      flexDirection: 'column',
      fontSize: '10px',
      lineHeight: '12px',
      margin: '0 6px',
      '& app-icon': {
        height: 18,
        width: 18,
        marginBottom: 4,
      },
    },
  },
};

const metaNavigationDesktop = {
  '& .meta-navigation': {
    '& .meta-navigation__item-link': {
      fontSize: '12px',
      lineHeight: '16px',
      margin: '0 0 0 16px',
      '& app-icon': {
        marginRight: 6,
      },
    },
  },
};

const segmentNavigationDesktop = {
  '& .segment-navigation': {
    display: 'flex',
    listStyle: 'none',
    '& .segment-navigation__item': {},
    '& .segment-navigation__item-link': {
      margin: '0 7px',
      padding: '4px 0',
      textDecoration: 'none',
      color: '#fff',
      fontFamily: 'TeleNeoWeb-ExtraBold',
      fontSize: '14px',
      lineHeight: '16px',
      transition: 'all .2s ease-in-out',
      borderBottom: '1px solid transparent',
      '&:hover, &.is-active': {
        borderBottom: '1px solid #fff',
        transition: 'all .2s ease-in-out',
      },
    },
  },
};

const addonNavigationDesktop = {
  '& .addon-navigation': {
    display: 'flex',
    listStyle: 'none',
    '& .addon-navigation__item': {},
    '& .addon-navigation__item-link': {
      textDecoration: 'none',
      color: '#fff',
      fontFamily: 'TeleNeoWeb-ExtraBold',
      fontSize: '14px',
      lineHeight: '16px',
      margin: '0 0 0 14px',
      padding: '4px 0',
      transition: 'all .2s ease-in-out',
      borderBottom: '1px solid transparent',
      '&:hover': {
        borderBottom: '1px solid #fff',
        transition: 'all .2s ease-in-out',
      },
    },
  },
};

const navigationMobile = {
  [`@media (max-width: ${breakpoint - 1}px)`]: {
    '& .meta-navigation__item-link': {
      minWidth: 24,
    },
    height: 'var(--header-nav-height)',
    '& .segment-navigation, & .addon-navigation, & .main-navigation': {
      display: 'none !important',
    },
    '& .header__brand': {
      height: 'var(--header-nav-height)',
      transition: 'height var(--header-transition-speed) ease-in-out',
      justifyContent: 'space-between',
      alignItems: 'center',
      display: 'flex',
      zIndex: 4001,
      position: 'absolute',
      width: '100%',
      padding: '0 16px',
      animationName: '$slideUp',
      animationDelay: '.5s',
      animationDuration: '.75s',
      animationFillMode: 'forwards',
      animationTimingFunction: 'cubic-bezier(0.42, 0.0, 0.1, 1.0)',
      ...rounding('brand', '#e20074'),
      '& .logo svg': {
        height: 26,
        width: 'auto',
      },
    },
    '& .header__nav': {
      padding: '0 16px',
      zIndex: 4000,
      position: 'absolute',
      width: '100%',
      top: 4,
      height: 'calc(var(--header-nav-height) - 4px)',
    },
    ...metaNavigationMobile,

    '& .header__nav__mobile-menu': {
      display: 'none',
      width: '100%',
      position: 'relative',
      top: 'var(--header-nav-height)',
    },
    '& .header__nav__mobile-menu--opened': {
      display: 'block',
      overflowY: 'scroll',
      height: 'calc(100vh - var(--header-nav-height))',
    },
  },
};

const stickyDesktop = {
  '&.sticky': {
    '--header-brand-height': '4px',
    '& .header__nav-logo': {
      opacity: 1,
      transition: 'opacity var(--header-transition-speed) ease-in-out',
    },
    '& .header__brand-content': {
      opacity: 0,
      transition:
        'opacity var(--header-transition-speed) ease-in-out, top var(--header-transition-speed) ease-in-out',
      top: 56,
    },
    '& .main-navigation': {
      marginLeft: 0,
      transition: 'margin-left var(--header-transition-speed) ease-in-out',
    },
  },
};

export const styles: JssStyle = {
  '@keyframes slideUp': {
    from: { top: 0 },
    to: { top: -56 },
  },
  header: {
    width: '100%',
    position: 'fixed',
    background: '#e20074',
    fontFamily: 'TeleNeoWeb-Regular',
    '& .header__brand': {
      background: '#e20074',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
    },
    '& .header__nav': {
      background: '#fff',
      color: '#333',
      display: 'flex',
      alignItems: 'center',
      borderTopLeftRadius: 'var(--header-border-radius)',
      borderTopRightRadius: 'var(--header-border-radius)',
      borderBottom: '1px solid #dfdfdf',
      '& .header__nav-logo svg path': {
        fill: '#e20074 !important',
      },
    },
    '& .header__nav-content': {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },
    '& .header__nav-menu-wrapper': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    ...rounding('nav', '#fff', '#dfdfdf'),
    ...metaNavigation,
    ...navigationMobile,
  },
  [`@media (min-width: ${breakpoint}px)`]: {
    header: {
      '& .mobile-menu, & .header__nav__mobile-menu': {
        display: 'none',
      },
      '& .header__brand': {
        height: 'var(--header-brand-height)',
        transition: 'height var(--header-transition-speed) ease-in-out',
        justifyContent: 'space-between',
        padding: '0 24px',
        '& app-logo': {
          marginRight: '1rem',
        },
      },
      '& .header__brand-content': {
        opacity: 1,
        transition:
          'opacity var(--header-transition-speed) ease-in-out, top var(--header-transition-speed) ease-in-out',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
        top: 0,
        '& .header__brand-branding': {
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'flex-start',
        },
        '& .header__brand-sector': {
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '& .header__brand-meta': {
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'flex-end',
        },
      },
      '& .header__nav': {
        padding: '0 24px',
        height: 'var(--header-nav-height)',
        position: 'relative',
      },
      '& .header__nav-logo': {
        width: 50,
        marginRight: '1rem',
        fontWeight: 'bold',
        opacity: 0,
        transition: 'opacity var(--header-transition-speed) ease-in-out',
        pointerEvents: 'none',
      },
      ...mainNavigationDesktop,
      ...metaNavigation,
      ...metaNavigationDesktop,
      ...segmentNavigationDesktop,
      ...addonNavigationDesktop,
      ...stickyDesktop,
    },
  },
};
