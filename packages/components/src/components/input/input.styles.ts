import { JssStyle } from 'jss';

const input = {
  small: {
    paddingX: 12,
    paddingY: 8,
    height: 40,
    labelTop: 4,
  },
  large: {
    paddingX: 12,
    paddingY: 12,
    height: 48,
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
  fontWeight: ({ type }) => type.weight_bold,
};

const defaultTransition = 'all 0.2s ease-in-out';

const animated = (size: string) => ({
  start: {
    fontSize: ({ type }) => type.size_3,
    color: '#6C6C6C',
    transform: ({ type }) =>
      `translate(${input[size].paddingX + 1}px, calc((${
        input[size].height
      }px - ${type.size_3}) / 2))`,
    transition: defaultTransition,
    fontWeight: ({ type }) => type.weight_medium,
  },
  end: {
    fontSize: ({ type_variants }) => type_variants.label_floating.fontSize,
    transform: `translate(${input[size].paddingX}px, ${input[size].labelTop}px)`,
    color: '#6C6C6C',
    transition: defaultTransition,
    fontWeight: ({ type_variants }) => type_variants.label_floating.fontWeight,
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
      fontSize: ({ type }) => type.size_3,
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
      fontSize: ({ type }) => type.size_3,
      borderRadius: 4,
      border: ({ palette }) => `1px solid ${palette.gray}`,
      fontFamily: 'inherit',
      boxSizing: 'border-box',
      zIndex: 1,
      margin: '6px 0',
      transition: 'border-color 0.2s ease-in-out',
      width: '100%',
      outline: 'none',
    },
    [`
      & .input__input, 
      & .input__select, 
      & .input__textarea,
    `]: {
      '&::placeholder': {
        transition: defaultTransition,
        color: 'transparent',
      },
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
      fontSize: ({ type_variants }) => type_variants.helper_text.fontSize,
      lineHeight: ({ type_variants }) => type_variants.helper_text.lineHeight,
      marginLeft: 'auto',
      color: ({ palette }) => palette.gray,
      transition: defaultTransition,
      paddingRight: 12,
    },
    '& .input__helper-text': {
      fontSize: ({ type_variants }) => type_variants.helper_text.fontSize,
      lineHeight: ({ type_variants }) => type_variants.helper_text.lineHeight,
      color: ({ palette }) => palette.helperText,
      transition: defaultTransition,
      paddingLeft: 12,
    },
    '& .input__meta': {
      display: 'flex',
      justifyContent: 'space-between',
    },
    '&:not($input--disabled)': {
      '& .input__input, & .input__select, & .input__textarea': {
        '&:hover, &:focus': {
          borderColor: ({ palette }) => palette.magentaHover,
        },
        '&:focus': {
          boxShadow: ({ size, color }) =>
            `0 0 0 ${size.border_focus} ${color.focus}`,
          '&::placeholder': {
            transition: defaultTransition,
            color: '#6C6C6C',
          },
        },
      },
    },
  },
  'input--variant-static': {
    '& .input__label': {
      display: 'flex',
      fontWeight: ({ type }) => type.weight_medium,
      color: '#6C6C6C',
    },
  },
  'input--has-focus': {},
  'input--variant-animated': {
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
    '&$input--has-focus .input__label, &.animated .input__label': {
      ...animated('large').end,
      ...bold,
    },
  },
  'input--status-error': {
    '& .input__input, & .input__textarea, & .input__select': {
      border: ({ palette }) => `2px solid ${palette.error}`,
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
    '&$input--has-focus .input__label, &.animated .input__label': animated(
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
    '&$input--status-error .input__checkbox-container': {
      '& .input__checkbox-placeholder': {
        border: ({ color }) => `2px solid ${color.error}`,
      },
    },

    // Checked Off - Available
    '& label': {
      fontWeight: ({ type }) => type.weight_medium,
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
      '& ~ label': {
        transition: defaultTransition,
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
      '& ~ label': {
        color: ({ color }) => color.primary_active,
      },
    },

    // Checked Off - Hover
    '& input:not([disabled]):hover ~ .input__checkbox-container, & input:not([disabled]) ~ .input__checkbox-container:hover': {
      '& .input__checkbox-placeholder': {
        boxShadow: 'none',
        borderColor: ({ palette }) => palette.magentaHover,
      },
      '& ~ label': {
        color: ({ color }) => color.primary_hover,
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
      fontWeight: ({ type }) => type.weight_medium,
      color: '#262626',
      transition: defaultTransition,
    },
    '& input': {
      appearance: 'none',
      height: 16,
      width: 16,
      backgroundColor: ({ palette }) => palette.white,
      border: ({ palette }) => `1px solid ${palette.gray}`,
      borderRadius: '50%',
      margin: ({ spacing }) => `0 ${spacing.inline} 0 0`,
      transition: defaultTransition,
    },
    // Checked Off - Focus
    '& input:focus': {
      boxShadow: ({ color }) => `0 0 0 2px ${color.focus}`,
      outline: 'none',
    },

    // Checked Off - Hover
    '&:hover input:not(:checked):not([disabled])': {
      // border: ({ palette }) => `1px solid ${palette.magentaHover}`,
      borderColor: ({ color }) => color.primary_hover,
      boxShadow: 'none',
    },
    '&:hover input:not(:checked):not([disabled]) ~ label': {
      color: ({ color }) => color.primary_hover,
    },

    // Checked Off - Pressed
    '& input:active': {
      border: ({ palette }) => `8px solid ${palette.magentaActive}`,
    },
    '& input:not(:checked):not([disabled]):active ~ label': {
      color: ({ color }) => color.primary_active,
    },

    // Checked Off - Disabled
    '& input:disabled': {
      border: ({ palette }) => `1px solid ${palette.grayDisabledBackground}`,
    },
    '& input:disabled ~ label': {
      color: ({ palette }) => palette.grayDisabledBackground,
    },

    // Checked Off - Error
    '&$input--status-error input': {
      border: ({ color }) => `2px solid ${color.error}`,
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

  'input__textarea-label-safety-background': {
    position: 'absolute',
    top: 2,
    left: 2,
    right: 2,
    borderRadius: ({ radii }) => radii.input,
    height: ({ spacing }) => spacing[5],
    backgroundColor: ({ background }) => background.default,
    pointerEvents: 'none',
    '$input--disabled &': {
      backgroundColor: 'transparent',
    },
  },

  'input--disabled': {
    [`
      & label,
      & .input__label,
      & input,
      & .input__input, 
      & .input__checkbox-container, 
      & .input__radio, 
      & .input__select, 
      & .input__textarea
    `]: {
      borderColor: '#D0D0D0',
      color: ({ color }) => color.disabled,
      cursor: 'not-allowed',
    },
  },
};
