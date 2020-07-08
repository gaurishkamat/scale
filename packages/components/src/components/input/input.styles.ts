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
    color: '#6c6c6c',
    transform: `translate(${input[size].paddingX + 1}px, ${(input[size].height -
      input[size].fontSize) /
      2}px)`,
    transition: defaultTransition,
    fontWeight: 400,
  },
  end: {
    fontSize: 10,
    transform: `translate(${input[size].paddingX}px, ${input[size].labelTop}px)`,
    color: ({ colors }) => colors.primary.default,
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
      border: '1px solid #cecece',
      padding: `${input.large.paddingY}px ${input.large.paddingX}px`,
      fontSize: 16,
      fontFamily: 'inherit',
      boxSizing: 'border-box',
      zIndex: 1,
      margin: '6px 0',
      height: input.large.height,
      transition: defaultTransition,
    },
    '& .input__textarea': {
      display: 'flex',
      padding: `${input.large.paddingY}px ${input.large.paddingX}px`,
      fontSize: 16,
      borderRadius: 4,
      border: '1px solid #cecece',
      fontFamily: 'inherit',
      boxSizing: 'border-box',
      zIndex: 1,
      margin: '6px 0',
      transition: 'border-color 0.2s ease-in-out',
      width: '100%'
    },
    '& .input__select': {
      appearance: 'none',
    },
    '& .input__select-wrapper': {
      position: 'relative',
      '& scale-icon': {
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
      },
    },
    '& .input__counter': {
      display: 'flex',
      justifyContent: 'flex-end',
      fontSize: 12,
      marginLeft: 'auto',
      color: '#333',
      transition: defaultTransition,
    },
    '& .input__helper-text': {
      fontSize: 12,
      transition: defaultTransition,
    },
    '& .input__meta': {
      display: 'flex',
      justifyContent: 'space-between',
    },
    '&:not($input--disabled)': {
      '& .input__input, & .input__select, & .input__textarea': {
        '&:hover, &:focus': {
          borderColor: ({ colors }) => colors.primary.default,
        },
      },
      '& .input__checkbox-container': {
        '&:hover, &:focus': {
          '& .input__checkbox-placeholder': {
            borderColor: ({ colors }) => colors.primary.default,
          },
        },
      },
      '& .input__radio': {
        '&:hover, &:focus': {
          borderColor: ({ colors }) => colors.primary.default,
        },
      },
    },
  },
  'input--variant-static': {
    '& .input__label': {
      display: 'flex',
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
    '&.animated .input__label, & label': {
      color: ({ colors }) => `${colors.error.default} !important`,
    },
    '& .input__input:focus + .input__label, & .input__textarea:focus + .input__label': {
      color: ({ colors }) => `${colors.error.default} !important`,
    },
    '& .input__input:focus + .input__label': {
      color: ({ colors }) => `${colors.error.default} !important`,
    },
    '& .input__input': {
      border: ({ colors }) => `1px solid ${colors.error.default}`,
    },
    '& .input__helper-text': {
      color: ({ colors }) => `${colors.error.default}`,
    },
    '& .input__counter': {
      color: ({ colors }) => `${colors.error.default}`,
    },
  },
  'input--size-small': {
    '& .input__input': {
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
  'input--disabled': {
    '& .input__label, & .input__input, & .input__checkbox-container, & .input__radio, & .input__select, & .input__textarea': {
      opacity: '0.5',
      cursor: 'not-allowed!important',
    },
  },
  'input--transparent': {
    '& .input__input, & .input__textarea, &$input--type-radio .input__radio, & .input__select': {
      backgroundColor: 'transparent',
    },
  },
  'input--type-checkbox': {
    display: 'flex',
    alignItems: 'center',
    '& .input__checkbox-container': {
      height: 24,
      width: 24,
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      marginRight: 10,
      '& .input__checkbox': {
        // define a default checkbox
        top: 0,
        left: 0,
        width: '100%',
        cursor: 'inherit',
        height: '100%',
        margin: 0,
        opacity: 0,
        padding: 0,
        zIndex: 1,
        position: 'absolute',
      },
      '& .input__checkbox-placeholder': {
        height: checkBox.height,
        width: checkBox.height,
        border: '1px solid #cecece',
        margin: checkBox.margin,
        borderRadius: 4,
      },
    },
    '&:not($input--disabled)': {
      '& .input__checkbox-container': {
        '& .input__checkbox-placeholder': {
          border: '1px solid #111111',
          backgroundColor: '#D8D8D8',
        },
        '&:hover': {
          '& .input__checkbox-placeholder': {
            border: '1px solid #E20074',
            backgroundColor: '#ffffff',
          },
        },
      },
      '&$input--transparent': {
        '& .input__checkbox-container': {
          '& .input__checkbox-placeholder': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  },
  'input--checked': {
    '& scale-icon': {
      height: checkBoxCheckedIcon.height,
      width: checkBoxCheckedIcon.width,
      userSelect: 'none',
      position: 'absolute',
      left: checkBox.margin + checkBox.width - checkBoxCheckedIcon.width,
      top: checkBox.margin + checkBox.width - checkBoxCheckedIcon.width,
    },
    '&$input--disabled': {
      '& .input__checkbox-placeholder': {
        backgroundColor: '#cdcdcd',
      },
    },
    '&:not($input--disabled)': {
      '& .input__checkbox-container': {
        '& .input__checkbox-placeholder': {
          border: '1px solid #E20074',
          backgroundColor: '#E20074',
        },
        '&:hover': {
          '& .input__checkbox-placeholder': {
            border: '1px solid #E20074',
            backgroundColor: '#F90984',
          },
        },
      },
      '& scale-icon': {
        '--icon-color': '#ffffff',
      },
    },
  },
  'input--type-radio': {
    display: 'flex',
    alignItems: 'center',
    '& .input__radio': {
      appearance: 'none',
      height: 16,
      width: 16,
      backgroundColor: '#ffffff',
      border: '1px solid #cecece',
      borderRadius: '50%',
      marginRight: 10,
      '&:checked, &:focus': {
        border: ({ colors }) => `6px solid ${colors.primary.default}`,
        transition: defaultTransition,
        outline: 'none',
      },
    },
    '&$input--disabled': {
      '& .input__radio': {
        '&:checked': {
          border: '6px solid #cdcdcd',
          backgroundColor: '#979797',
        },
      },
    },
  },
};
