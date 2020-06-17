import { JssStyle } from "jss";

const bold = {
  fontFamily: "TeleGrotesk Next Bold"
};

export const Input: JssStyle = {
  input: {
    "& .input__helper-text, & .input__counter": bold
  },
  "input--variant-animated": {
    "& .input__input:focus + .input__label, &.animated .input__label": bold,
    "& .input__textarea:focus + .input__label, &.animated .input__label": bold
  },
  "input--type-checkbox": {
    "& .input__checkbox-container": {
      marginRight: 10
    },
    "&:not($input--disabled)": {
      "& .input__checkbox-container": {
        "& .input__checkbox-placeholder": {
          border: "1px solid #111111",
          backgroundColor: "#D8D8D8"
        },
        "&:hover": {
          "& .input__checkbox-placeholder": {
            border: "1px solid #E20074",
            backgroundColor: "#ffffff"
          }
        }
      }
    }
  },
  "input--checked": {
    "&:not($input--disabled)": {
      "& .input__checkbox-container": {
        "& .input__checkbox-placeholder": {
          border: "1px solid #E20074",
          backgroundColor: "#E20074"
        },
        "&:hover": {
          "& .input__checkbox-placeholder": {
            border: "1px solid #E20074",
            backgroundColor: "#F90984"
          }
        }
      },
      "& scale-icon": {
        "--icon-color": "#ffffff"
      }
    }
  },
  "input--type-radio": {
    "& .input__radio": {
      marginRight: 10
    }
  }
};
