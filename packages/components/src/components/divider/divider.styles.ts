import { JssStyle } from 'jss';

export const styles: JssStyle = {
  ':host': {
    width: '100%',
    height: '100%',
  },
  divider: {
    padding: ({ spacing }) => spacing['3'],
    '& hr': {
      border: '0',
      borderTop: ({ color, size }) => `${size.divider}px solid ${color.divider}`,
      margin: 0,
    },
  },
  divider__vertical: {
    borderLeft: ({ color, size }) => `${size.divider}px solid ${color.divider}`,
    minHeight: ({ spacing }) => spacing.flow,
  },
  'divider--vertical': {
    '&, divider__vertical': {
      height: 'inherit',
      display: 'inline-flex',
    },
  },
};
