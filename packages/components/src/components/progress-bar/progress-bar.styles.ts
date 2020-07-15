import { JssStyle } from 'jss';

export const styles: JssStyle = {
  'progress-bar': {
    width: '100%',
  },
  'progress-bar--has-error': {
    '& $progress-bar__outer': {
      border: ({ colors }) => `1px solid ${colors.error.default}`,
    },
    '& $progress-bar__status-description': {
      color: ({ colors }) => `${colors.error.default}`,
    },
    '& scale-icon': {
      '--icon-color': ({ colors }) => `${colors.error.default}`,
    },
  },
  'progress-bar--disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
  'progress-bar-wrapper': {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    boxSizing: 'border-box',
    '& scale-icon': {
      marginTop: 12,
    },
  },
  'progress-bar__outer': {
    margin: '12px 12px 12px 0',
    position: 'relative',
    height: '8px',
    borderRadius: '100px',
    background: '#ebeef5',
    overflow: 'hidden',
    width: '100%',
  },
  'progress-bar__inner': {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    borderRadius: '100px',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    animationFillMode: 'both',
    background: ({ colors }) => `${colors.primary.default}`,
  },
  'progress-bar__inner-status': {
    color: '#fff',
    fontSize: '12px',
    padding: '0 12px',
  },
  'progress-bar__status': {
    color: '#606266',
    fontSize: '12px',
    display: 'inline-block',
  },
  'progress-bar__status-description': {
    color: '#606266',
    fontSize: '12px',
  },
};
