import { JssStyle } from 'jss';

export const styles: JssStyle = {
  table: {
    display: 'block',
    overflow: 'auto',
    borderRadius: '4px 4px 0 0',
    background: ({ colors }) => colors.grey[100],

    '& table': {
      fontFamily: ({ type }) => type.family,
      borderSpacing: 0,
      borderCollapse: 'collapse',
      width: '100%',
      whiteSpace: 'nowrap',
    },

    '& th': {
      color: ({ colors }) => colors.grey[600],
      lineHeight: '32px', // TODO revise, this is weird
      fontSize: ({ type }) => type.size_2,
      textAlign: 'left',
      userSelect: 'none',
      '&:focus': {
        outline: 'none',
      },
    },
    '& th, td': {
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
      borderBottom: '1px solid #000000',
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
      '&:hover': {
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
      },

      '&[aria-sort="descending"] .scale-sort-indicator polygon:first-of-type': {
        fill: '#000000',
      },
      '&:hover[aria-sort="descending"] .scale-sort-indicator polygon:first-of-type': {
        fill: ({ color }) => color.primary_hover,
      },
      '&:active[aria-sort="descending"] .scale-sort-indicator polygon:first-of-type': {
        fill: ({ color }) => color.primary_active,
      },
      '&[aria-sort="descending"] .scale-sort-indicator polygon': {
        fill: '#DCDCDC',
      },
      '&:hover[aria-sort="descending"] .scale-sort-indicator polygon': {
        fill: '#DCDCDC',
      },
      '&:active[aria-sort="descending"] .scale-sort-indicator polygon': {
        fill: '#DCDCDC',
      },
      '&[aria-sort="ascending"] .scale-sort-indicator polygon:first-of-type': {
        fill: '#DCDCDC',
      },
      '&:hover[aria-sort="ascending"] .scale-sort-indicator polygon:first-of-type': {
        fill: '#DCDCDC',
      },
      '&:active[aria-sort="ascending"] .scale-sort-indicator polygon:first-of-type': {
        fill: '#DCDCDC',
      },
      '&[aria-sort="ascending"] .scale-sort-indicator polygon': {
        fill: '#000000',
      },
      '&:hover[aria-sort="ascending"] .scale-sort-indicator polygon': {
        fill: ({ color }) => color.primary_hover,
      },
      '&:active[aria-sort="ascending"] .scale-sort-indicator polygon': {
        fill: ({ color }) => color.primary_active,
      },
      '& .scale-sort-indicator': {
        left: '-8px',
        position: 'relative',
        display: 'inline-block',
        width: '12px',
        height: '20px',
        '& > svg': {
          position: 'absolute',
          left: 0,
          top: '4px',
          height: '24px',
          width: '24px',
        },
        '& polygon': {
          fill: '#DCDCDC',
        },
      },
    },
  },
};
