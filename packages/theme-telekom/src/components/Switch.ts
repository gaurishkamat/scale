import { JssStyle } from "jss";

export const Switch: JssStyle = {
  switch: {
    "&:not($switch--disabled)": {
      "&:hover": {
        borderColor: "#E20074",
        "&:after": {
          backgroundColor: "#E20074"
        }
      }
    }
  },
  "switch--active": {
    borderColor: "#E20074",
    backgroundColor: "#E20074",
    "&:not($switch--disabled)": {
      "&:hover": {
        backgroundColor: "#F90984",
        "&:after": {
          backgroundColor: "#fff"
        }
      }
    }
  },
  "switch--disabled": {
    borderColor: "#979797",
    "&:after": {
      backgroundColor: "#D0D0D0"
    },
    opacity: 1,
    "&$switch--active": {
      borderColor: "#D0D0D0",
      backgroundColor: "#D0D0D0",
      "&:after": {
        backgroundColor: "#fff"
      }
    }
  }
};
