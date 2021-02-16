import { JssStyle } from 'jss';

export const styles: JssStyle = {
  table: {
    display: 'block',
    overflow: 'auto',
    borderRadius: '4px 4px 0 0',
    background: ({ colors }) => colors.grey[100],
    color: ({ color }) => color.text,

    '& table': {
      borderSpacing: 0,
      borderCollapse: 'collapse',
      width: '100%',
      whiteSpace: 'nowrap',
    },

    '& th': {
      color: ({ color }) => color.text,
      lineHeight: '32px', // TODO revise, this is weird
      fontSize: ({ type }) => type.size_2,
      textAlign: 'left',
      userSelect: 'none',
      padding: '0 8px',
      '&:focus': {
        outline: 'none',
      },
    },
    '& td': {
      padding: '0 8px',
    },

    '& tbody tr td': {
      padding: '8px',
    },
    '& tbody td': {
      borderBottom: ({ color, size }) =>
        `${size.divider}px solid ${color.divider}`,
    },

    '& tbody tr': {
      '&:hover': {
        background: '#EDEDED',
      },
    },

    '& tfoot, tbody': {
      background: '#FFFFFF',
    },

    '& tfoot tr td': {
      fontWeight: 600,
      padding: '8px',
      borderBottom: ({ color }) => `1px solid ${color.text}`,
    },

    '& .scale-sort-indicator svg': {
      display: 'none',
    },
  },

  'table--size-default': {
    '& tbody tr td': {
      padding: '16px 8px',
    },
  },

  'table--sortable': {
    '& th': {
      cursor: 'pointer',
      borderRadius: '4px 4px 0 0',
      padding: '0 8px 0 0',

      '&:hover': {
        '& .scale-sort-indicator': {
          display: 'inline-block',
        },
        padding: '0 8px 0 0',
        background: '#EDEDED',
      },

      '&:active': {
        background: '#DCDCDC',
      },

      '&:focus': {
        boxShadow: ({ color }) => `0 0 0 2px ${color.focus} inset`,
      },

      '& .scale-sort-indicator svg': {
        display: 'block',
      },
      '&[aria-disabled]': {
        pointerEvents: 'none',
        padding: '0 8px',
      },

      '&:not([aria-sort])': {
        padding: '0 8px',
        '&:hover': {
          padding: '0 8px 0 0',
        },
        '& .scale-sort-indicator': {
          display: 'none',
        },
      },
      '&[aria-sort="none"]': {
        padding: '0 8px',
        '&:hover': {
          padding: '0 8px 0 0',
        },
        '& .scale-sort-indicator': {
          display: 'none',
        },
      },

      '&[aria-sort="ascending"] .scale-sort-indicator polygon:first-of-type': {
        fill: ({ color }) => color.text,
      },
      '&:hover .scale-sort-indicator polygon:first-of-type': {
        fill: ({ color }) => color.primary_hover,
      },
      '&:hover[aria-sort="ascending"] .scale-sort-indicator polygon:first-of-type': {
        fill: ({ color }) => color.primary_hover,
      },
      '&:active[aria-sort="ascending"] .scale-sort-indicator polygon:first-of-type': {
        fill: ({ color }) => color.primary_active,
      },

      '&[aria-sort="ascending"] .scale-sort-indicator polygon': {
        fill: 'transparent',
      },
      '&:hover[aria-sort="ascending"] .scale-sort-indicator polygon': {
        fill: 'transparent',
      },
      '&:active[aria-sort="ascending"] .scale-sort-indicator polygon': {
        fill: 'transparent',
      },
      '&[aria-sort="descending"] .scale-sort-indicator polygon:first-of-type': {
        fill: 'transparent',
      },
      '&:hover[aria-sort="descending"] .scale-sort-indicator polygon:first-of-type': {
        fill: 'transparent',
      },
      '&:active[aria-sort="descending"] .scale-sort-indicator polygon:first-of-type': {
        fill: 'transparent',
      },
      '&[aria-sort="descending"] .scale-sort-indicator polygon': {
        fill: ({ color }) => color.text,
      },
      '&:hover[aria-sort="descending"] .scale-sort-indicator polygon': {
        fill: ({ color }) => color.primary_hover,
      },
      '&:active[aria-sort="descending"] .scale-sort-indicator polygon': {
        fill: ({ color }) => color.primary_active,
      },
      '& .scale-sort-indicator': {
        position: 'relative',
        display: 'inline-block',
        width: '16px',
        height: '16px',
        margin: '0 0 0 4px',
        '& > svg': {
          position: 'absolute',
          left: 0,
          top: '4px',
          height: '16px',
          width: '16px',
        },
        '& polygon': {
          fill: 'transparent',
        },
      },
    },
  },
};
