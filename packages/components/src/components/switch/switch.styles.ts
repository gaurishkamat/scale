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
    '& $switch__wrapper': {
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
      },
      '& $switch__toggle': {
        position: 'absolute',
        top: 1,
        left: 1,
        right: 'auto',
        borderRadius: '100%',
        width: 14,
        height: 14,
        backgroundColor: ({ color }) => color.text,
        border: '1px solid transparent',
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
      '& $switch__label': {
        marginLeft: ({ spacing }) => spacing['4'],
        cursor: 'pointer',
      },
    },
    // Checked Off - hover
    '& $switch__wrapper:hover': {
      '& $switch__container': {
        border: ({ color }) => `1px solid ${color.primary_hover}`,
      },
      '& $switch__toggle': {
        backgroundColor: ({ color }) => color.primary_hover,
      },
      '& $switch__label': {
        color: ({ color }) => color.primary_hover,
      },
    },
    // Checked Off - focus
    '& input:focus ~ $switch__wrapper': {
      '& $switch__container': {
        boxShadow: ({ color }) => `0 0 0 2px ${color.focus}`,
      },
      '& $switch__toggle': {
        backgroundColor: ({ color }) => color.text,
      },
    },
    // Checked Off - pressed
    '& input:not([disabled]) ~ $switch__wrapper:active': {
      '& $switch__container': {
        background: ({ color }) => color.primary_active,
        border: ({ color }) => `1px solid ${color.primary_active}`,
        color: ({ color }) => color.text_contrast,
      },
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
      '& $switch__label': {
        color: ({ color }) => color.primary_active,
      },
    },
    // Checked Off - disabled
    '& input:disabled ~ $switch__wrapper': {
      '& $switch__container': {
        cursor: 'not-allowed',
        border: ({ background }) => `1px solid ${background.disabled}`,
        color: ({ color }) => color.text_contrast,
      },
      '& $switch__toggle': {
        backgroundColor: ({ background }) => background.disabled,
      },
      '& $switch__label': {
        cursor: 'not-allowed',
        color: ({ color }) => color.disabled,
      },
    },
    // Checked On - available
    '& input:checked ~ $switch__wrapper': {
      '& $switch__container': {
        border: ({ color }) => `1px solid ${color.primary}`,
        color: ({ color }) => color.text_contrast,
        backgroundColor: ({ color }) => color.primary,
      },
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
      '& $switch__label': {
        color: ({ color }) => color.primary,
      },
    },
    // Checked On - hover
    '& input:checked ~ $switch__wrapper:hover': {
      '& $switch__container': {
        border: ({ color }) => `1px solid ${color.primary_hover}`,
        backgroundColor: ({ color }) => color.primary_hover,
      },
      '& $switch__label': {
        color: ({ color }) => color.primary_hover,
      },
    },
    // Checked On - focus
    '& input:checked:focus ~ $switch__wrapper': {
      '& $switch__toggle': {
        backgroundColor: ({ color }) => color.text_contrast,
      },
    },
    // Checked On - pressed
    '& input:checked:not([disabled]) ~ $switch__wrapper:active': {
      '& $switch__container': {
        background: ({ color }) => color.text_contrast,
        border: ({ color }) => `1px solid ${color.primary_active}`,
        color: ({ color }) => color.text,
      },
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
    '& input:checked:disabled ~ $switch__wrapper:hover, & input:checked:disabled ~ $switch__wrapper': {
      '& $switch__label': {
        color: ({ color }) => color.disabled,
      },
      '& $switch__container': {
        cursor: 'not-allowed',
        border: ({ background }) => `1px solid ${background.disabled}`,
        color: ({ background }) => background.disabled,
        background: ({ background }) => background.disabled,
      },
      '& $switch__toggle': {
        backgroundColor: ({ color }) => color.text_contrast,
      },
    },
  },
  // These here are needed so JSS can created the hashed class names
  // used in nested selectors
  switch__wrapper: {},
  switch__label: {},
  switch__container: {},
  switch__toggle: {},
  switch__text: {},
};
