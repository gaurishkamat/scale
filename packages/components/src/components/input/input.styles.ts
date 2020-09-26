import { JssStyle } from 'jss';

const input = {
  small: {
    paddingX: 12,
    paddingY: 8,
    height: 40,
    fontSize: 16,
    labelTop: 4,
  },
  large: {
    paddingX: 12,
    paddingY: 12,
    height: 48,
    fontSize: 16,
    labelTop: 8,
  },
};

const checkBox = {
  height: 16,
  width: 16,
  margin: 2,
};

const checkBoxCheckedIcon = {
  height: 12,
  width: 12,
};

const bold = {
  fontFamily: 'TeleNeoWeb-Bold',
};

const defaultTransition = 'all 0.2s ease-in-out';

const animated = (size: string) => ({
  start: {
    fontSize: 16,
    color: '#6C6C6C',
    transform: `translate(${input[size].paddingX + 1}px, ${(input[size].height -
      input[size].fontSize) /
      2}px)`,
    transition: defaultTransition,
    fontWeight: 400,
  },
  end: {
    fontSize: 10,
    transform: `translate(${input[size].paddingX}px, ${input[size].labelTop}px)`,
    color: '#6C6C6C',
    transition: defaultTransition,
    fontWeight: 700,
  },
});

export const styles: JssStyle = {
  input: {
    position: 'relative',
    '& .input__helper-text, & .input__counter': bold,
    '& .input__input, & .input__select': {
      display: 'flex',
      width: '100%',
      borderRadius: 4,
      border: ({ palette }) => `1px solid ${palette.gray}`,
      padding: `${input.large.paddingY}px ${input.large.paddingX}px`,
      fontSize: 16,
      fontFamily: 'inherit',
      boxSizing: 'border-box',
      zIndex: 1,
      margin: '6px 0',
      height: input.large.height,
      transition: defaultTransition,
      outline: 'none',
    },
    '& .input__textarea': {
      display: 'flex',
      padding: `${input.large.paddingY}px ${input.large.paddingX}px`,
      fontSize: 16,
      borderRadius: 4,
      border: ({ palette }) => `1px solid ${palette.gray}`,
      fontFamily: 'inherit',
      boxSizing: 'border-box',
      zIndex: 1,
      margin: '6px 0',
      transition: 'border-color 0.2s ease-in-out',
      width: '100%',
    },
    '& .input__select': {
      appearance: 'none',
    },
    '& .input__select-wrapper': {
      position: 'relative',
      '& scale-icon': {
        position: 'absolute',
        right: 12,
        top: '50%',
        transform: 'translateY(-50%)',
      },
    },
    '& .input__counter': {
      display: 'flex',
      justifyContent: 'flex-end',
      fontSize: 12,
      marginLeft: 'auto',
      color: ({ palette }) => palette.gray,
      transition: defaultTransition,
    },
    '& .input__helper-text': {
      fontSize: 12,
      color: ({ palette }) => palette.helperText,
      transition: defaultTransition,
    },
    '& .input__meta': {
      display: 'flex',
      justifyContent: 'space-between',
    },
    '&:not($input--disabled)': {
      '& .input__input, & .input__select, & .input__textarea': {
        '&:hover, &:focus': {
          borderColor: ({ palette }) => palette.magentaHover,
          boxShadow: ({ size, color }) =>
            `0 0 0 ${size.border_focus} ${color.focus}`,
        },
      },
    },
  },
  'input--variant-static': {
    '& .input__label': {
      display: 'flex',
      color: '#6C6C6C',
    },
  },
  'input--variant-animated': {
    '& .input__input:focus + .input__label, &.animated .input__label': {
      ...bold,
      ...animated('large').end,
    },
    '& .input__input, & .input__select': {
      padding: `${input.large.paddingY}px ${input.large.paddingX}px 0 ${input
        .large.paddingY - 1}px`,
    },
    '& .input__textarea': {
      paddingTop: `${input.large.paddingY * 2}px`,
    },
    '& .input__label': {
      position: 'absolute',
      pointerEvents: 'none',
      top: 0,
      left: 0,
      display: 'flex',
      zIndex: 10,
      ...animated('large').start,
    },
    '& .input__input:focus + .input__label, & .input__select:focus + .input__label, &.animated .input__label': animated(
      'large'
    ).end,
    '& .input__textarea:focus + .input__label, &.animated .input__label': {
      ...animated('large').end,
      ...bold,
    },
  },
  'input--status-error': {
    '&.animated .input__label': {
      color: ({ palette }) => `${palette.error} !important`,
    },
    '& .input__input:focus + .input__label, & .input__textarea:focus + .input__label': {
      color: ({ palette }) => `${palette.error} !important`,
    },
    '& .input__input:focus + .input__label': {
      color: ({ palette }) => `${palette.error} !important`,
    },
    '& .input__input': {
      border: ({ palette }) => `1px solid ${palette.error}`,
    },
    '& .input__helper-text': {
      color: ({ palette }) => `${palette.error}`,
    },
    '& .input__counter': {
      color: ({ palette }) => `${palette.error}`,
    },
  },
  'input--size-small': {
    '& .input__input': {
      height: input.small.height,
    },
    '& .input__select': {
      height: input.small.height,
    },
    '& .input__label': {
      position: 'absolute',
      pointerEvents: 'none',
      top: 0,
      left: 0,
      display: 'flex',
      zIndex: 10,
      ...animated('small').start,
    },
    '& .input__input:focus + .input__label, &.animated .input__label': animated(
      'small'
    ).end,
  },
  'input--transparent': {
    '& .input__input, & .input__textarea, &$input--type-radio .input__radio, & .input__select': {
      backgroundColor: 'transparent',
    },
  },
  'input--type-checkbox': {
    display: 'flex',
    alignItems: 'center',
    '& input': {
      position: 'absolute',
      opacity: 0,
      height: 0,
      width: 0,
    },

    // Error
    '&$input--status-error': {
      '& input ~ label': {
        color: ({ palette }) => `${palette.error}`,
      },
      // Pressed Error
      '& input:not([disabled]):active ~ label': {
        color: ({ palette }) => `${palette.gray}`,
      },
    },

    // Checked Off - Available
    '& label': {
      color: '#262626',
    },
    '& .input__checkbox-container': {
      height: 24,
      width: 24,
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      marginRight: ({ spacing }) => spacing.inline,
      '& .input__checkbox-placeholder': {
        boxSizing: 'border-box',
        height: checkBox.height,
        width: checkBox.width,
        margin: checkBox.margin,
        marginLeft: 4,
        borderRadius: 4,
        border: ({ palette }) => `1px solid ${palette.gray}`,
        background: ({ palette }) => palette.white,
        transition: defaultTransition,
      },
      '& scale-icon': {
        height: checkBoxCheckedIcon.height,
        width: checkBoxCheckedIcon.width,
        userSelect: 'none',
        position: 'absolute',
        left: checkBox.margin + checkBox.width - checkBoxCheckedIcon.width,
        top: checkBox.margin + checkBox.width - checkBoxCheckedIcon.width,
        '--icon-color': ({ palette }) => palette.white,
      },
    },

    // Checked Off - Pressed
    '& input:not([disabled]):active ~ .input__checkbox-container, & input:not([disabled]) ~ .input__checkbox-container:active': {
      '& .input__checkbox-placeholder': {
        borderColor: ({ palette }) => palette.magentaActive,
        background: ({ palette }) => palette.magentaActive,
      },
      '& scale-icon': {
        '--icon-color': ({ palette }) => palette.magentaActive,
      },
    },

    // Checked Off - Hover
    '& input:not([disabled]):hover ~ .input__checkbox-container, & input:not([disabled]) ~ .input__checkbox-container:hover': {
      '& .input__checkbox-placeholder': {
        boxShadow: 'none',
        borderColor: ({ palette }) => palette.magentaHover,
      },
    },

    // Checked Off - Focus
    '& input:focus ~ .input__checkbox-container': {
      '& .input__checkbox-placeholder': {
        boxShadow: ({ color }) => `0 0 0 2px ${color.focus}`,
      },
    },

    // Checked Off - Disabled
    '& input:disabled ~ .input__checkbox-container': {
      '& .input__checkbox-placeholder': {
        borderColor: ({ palette }) => palette.grayDisabledBackground,
      },
    },
    '& input:disabled ~ label': {
      color: ({ palette }) => palette.grayDisabledBackground,
    },

    // Checked On - Available
    '& input:checked:not([disabled]) ~ .input__checkbox-container': {
      '& .input__checkbox-placeholder': {
        border: ({ palette }) => `1px solid ${palette.magenta}`,
        background: ({ palette }) => palette.magenta,
      },
    },

    // Checked On - Pressed
    '& input:checked:not([disabled]):active ~ .input__checkbox-container, & input:checked:not([disabled]) ~ .input__checkbox-container:active': {
      '& .input__checkbox-placeholder': {
        borderColor: ({ palette }) => palette.magentaActive,
        background: ({ palette }) => palette.magentaActive,
      },
      '& scale-icon': {
        '--icon-color': ({ palette }) => palette.white,
      },
    },

    // Checked On - Hover
    '& input:checked:not([disabled]):hover ~ .input__checkbox-container, & input:checked:not([disabled]) ~ .input__checkbox-container:hover': {
      '& .input__checkbox-placeholder': {
        boxShadow: 'none',
        borderColor: ({ palette }) => palette.magentaHover,
        background: ({ palette }) => palette.magentaHover,
      },
    },

    // Checked On - Disabled
    '& input:checked:disabled ~ .input__checkbox-container': {
      '& .input__checkbox-placeholder': {
        background: ({ palette }) => palette.grayDisabledBackground,
      },
      '& scale-icon': {
        '--icon-color': '#A4A4A4',
      },
    },
    '& input:checked:disabled ~ label': {
      color: '#A4A4A4',
    },
  },

  'input--type-radio': {
    display: 'flex',
    alignItems: 'center',
    // Checked Off - Available
    '& label': {
      color: '#262626',
    },
    '& input': {
      appearance: 'none',
      height: 16,
      width: 16,
      backgroundColor: ({ palette }) => palette.white,
      border: ({ palette }) => `1px solid ${palette.gray}`,
      borderRadius: '50%',
      margin: ({ spacing }) => `0 ${spacing.inline} 0 0`,
    },
    // Checked Off - Focus
    '& input:focus': {
      boxShadow: ({ color }) => `0 0 0 2px ${color.focus}`,
      outline: 'none',
    },

    // Checked Off - Hover
    '& input:hover': {
      border: ({ palette }) => `1px solid ${palette.magentaHover}`,
      boxShadow: 'none',
    },

    // Checked Off - Pressed
    '& input:active': {
      border: ({ palette }) => `8px solid ${palette.magentaActive}`,
    },

    // Checked Off - Disabled
    '& input:disabled': {
      border: ({ palette }) => `1px solid ${palette.grayDisabledBackground}`,
    },
    '& input:disabled ~ label': {
      color: ({ palette }) => palette.grayDisabledBackground,
    },

    // Checked Off - Error
    '&$input--status-error': {
      '& label': {
        color: ({ palette }) => palette.error,
      },
      // Checked Off - Error Pressed
      '& input:active ~ label': {
        color: ({ palette }) => palette.gray,
      },
    },

    // Checked On - Available
    '& input:checked': {
      border: ({ palette }) => `6px solid ${palette.magenta}`,
    },

    // Checked On - Pressed
    '& input:checked:active': {
      border: ({ palette }) => `6px solid ${palette.magentaActive}`,
    },

    // Checked On - Disabled
    '& input:checked:disabled': {
      border: ({ palette }) => `6px solid ${palette.grayDisabledBackground}`,
      background: '#A4A4A4',
    },
    '& input:checked:disabled ~ label': {
      color: '#A4A4A4',
    },
  },

  'input--disabled': {
    '& .input__label, & .input__input, & .input__select, & .input__textarea': {
      color: ({ color }) => color.disabled,
      cursor: 'not-allowed!important',
    },
  },
};
