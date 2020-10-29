import { JssStyle } from 'jss';
export const styles: JssStyle = {
  switch: {
    '& input': {
      position: 'absolute',
      opacity: 0,
      height: 0,
      width: 0,
    },
    // Checked Off - available
    '& $switch__container': {
      position: 'relative',
      display: 'inline-flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: 34,
      height: 14,
      padding: 2,
      borderRadius: 10,
      cursor: 'pointer',
      border: ({ color }) => `1px solid ${color.text}`,
      backgroundColor: ({ color }) => color.text_contrast,
      '& $switch__toggle': {
        position: 'absolute',
        top: 1,
        left: 1,
        right: 'auto',
        borderRadius: '100%',
        width: 16,
        height: 16,
        backgroundColor: ({ color }) => color.text,
      },
      '& $switch__text': {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        padding: '0 6px 0 8px',
        '&:before': {
          fontSize: ({ type }) => type.size_2,
          content: '"0"',
        },
      },
    },
    // Checked Off - hover
    '& $switch__container:hover': {
      border: ({ color }) => `1px solid ${color.primary_hover}`,
      '& $switch__toggle': {
        backgroundColor: ({ color }) => color.primary_hover,
      },
    },
    // Checked Off - focus
    '& input:focus ~ $switch__container': {
      boxShadow: ({ color }) => `0 0 0 2px ${color.focus}`,
      '& $switch__toggle': {
        backgroundColor: ({ color }) => color.text,
      },
    },
    // Checked Off - pressed
    '& input:not([disabled]) ~ $switch__container:active': {
      background: ({ color }) => color.primary_active,
      border: ({ color }) => `1px solid ${color.primary_active}`,
      color: ({ color }) => color.text_contrast,
      '& $switch__toggle': {
        backgroundColor: ({ color }) => color.text_contrast,
        left: 'auto',
        right: 1,
      },
      '& $switch__text': {
        justifyContent: 'flex-start',
        '&:before': {
          fontSize: ({ type }) => type.size_2,
          content: '"I"',
        },
      },
    },
    // Checked Off - disabled
    '& input:disabled ~ $switch__container': {
      cursor: 'not-allowed',
      border: ({ background }) => `1px solid ${background.disabled}`,
      color: ({ color }) => color.text_contrast,
      '& $switch__toggle': {
        backgroundColor: ({ background }) => background.disabled,
      },
    },
    // Checked On - available
    '& input:checked ~ $switch__container': {
      border: ({ color }) => `1px solid ${color.primary}`,
      color: ({ color }) => color.text_contrast,
      backgroundColor: ({ color }) => color.primary,
      '& $switch__toggle': {
        backgroundColor: ({ color }) => color.text_contrast,
        left: 'auto',
        right: 1,
      },
      '& $switch__text': {
        justifyContent: 'flex-start',
        '&:before': {
          fontSize: ({ type }) => type.size_2,
          content: '"I"',
        },
      },
    },
    // Checked On - hover
    '& input:checked ~ $switch__container:hover': {
      border: ({ color }) => `1px solid ${color.primary_hover}`,
      backgroundColor: ({ color }) => color.primary_hover,
    },
    // Checked On - focus
    '& input:checked:focus ~ $switch__container': {
      '& $switch__toggle': {
        backgroundColor: ({ color }) => color.text_contrast,
      },
    },
    // Checked On - pressed
    '& input:checked:not([disabled]) ~ $switch__container:active': {
      background: ({ color }) => color.text_contrast,
      border: ({ color }) => `1px solid ${color.primary_active}`,
      color: ({ color }) => color.text,
      '& $switch__toggle': {
        backgroundColor: ({ color }) => color.primary_active,
        left: 1,
        right: 'auto',
      },
      '& $switch__text': {
        justifyContent: 'flex-end',
        '&:before': {
          fontSize: ({ type }) => type.size_2,
          content: '"0"',
        },
      },
    },
    // Checked On - disabled
    '& input:checked:disabled ~ $switch__container': {
      cursor: 'not-allowed',
      border: ({ background }) => `1px solid ${background.disabled}`,
      color: ({ background }) => background.disabled,
      background: ({ background }) => background.disabled,
      '& $switch__toggle': {
        backgroundColor: ({ color }) => color.text_contrast,
      },
    },
  },
  // These here are needed so JSS can created the hashed class names
  // used in nested selectors
  switch__container: {},
  switch__toggle: {},
  switch__text: {},
};
