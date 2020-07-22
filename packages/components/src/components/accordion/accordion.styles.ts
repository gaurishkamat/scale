import { JssStyle } from 'jss';

export const styles: JssStyle = {
  accordion: {
    margin: 0,

    padding: 0,
    width: '20em',
  },
  accordionContainer: { borderRadius: '7px', marginBottom: '1em' },
  accordionTrigger: {
    background: 'none',
    color: 'hsl(0, 0%, 13%)',
    display: 'block',
    fontSize: '1rem',
    fontWeight: 'normal',
    margin: 0,
    padding: '1em 1.5em',
    position: 'relative',
    textAlign: 'left',
    width: '100%',
    outline: 'none',
    borderStyle: 'none',
    '&:focus': {
      background: 'hsl(216, 94%, 94%)',
    },
    '&:hover': {
      background: 'hsl(216, 94%, 94%)',
    },
    '&:focus .accordionTitle': {
      borderColor: 'hsl(216, 94%, 73%)',
    },
    '&:focus .accordionIcon': {
      borderColor: 'hsl(216, 94%, 73%)',
    },
    '&[aria-expanded="true"] .accordionIcon': {
      transform: 'translateY(-50%) rotate(-135deg)',
    },
  },
  accordionTitle: {
    display: 'block',
    pointerEvents: 'none',
    border: 'transparent 2px solid',
    borderRadius: '5px',
    padding: '0.25em',
    outline: 'none',
  },
  accordionIcon: {
    border: 'solid hsl(0, 0%, 62%)',
    borderWidth: '0 2px 2px 0',
    height: '0.5rem',
    pointerEvents: 'none',
    position: 'absolute',
    right: '2em',
    top: '50%',
    width: '0.5rem',
    transform: 'translateY(-5px) rotate(45deg)',
  },
  accordionPanel: {
    margin: 0,
    padding: '1em 1.5em',
  },
};
