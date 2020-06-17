import { JssStyle } from "jss";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Link } from "./components/Link";
import { Tag } from "./components/Tag";
import { Input } from "./components/Input";

const theme: JssStyle = {
  shape: {
    borderRadius: 8
  },
  colors: {
    primary: {
      default: "#e20074"
    }
  },
  typography: {
    variants: {
      h1: {
        fontSize: 40,
        lineHeight: "48px",
        fontFamily: "TeleGrotesk Next Ultra",
        fontWeight: "unset",
        letterSpacing: 0
      },
      h2: {
        fontSize: 32,
        lineHeight: "40px",
        fontFamily: "TeleGrotesk Next Ultra",
        fontWeight: "unset",
        letterSpacing: 0
      },
      h3: {
        fontSize: 24,
        lineHeight: "32px",
        fontFamily: "TeleGrotesk Next Ultra",
        fontWeight: "unset",
        letterSpacing: 0
      },
      h4: {
        fontSize: 20,
        lineHeight: "24px",
        fontFamily: "TeleGrotesk Next Ultra",
        fontWeight: "unset",
        letterSpacing: 0
      },
      h5: {
        fontSize: 16,
        lineHeight: "24px",
        fontFamily: "TeleGrotesk Next Ultra",
        fontWeight: "unset",
        letterSpacing: 0
      },
      h6: {
        fontSize: 16,
        lineHeight: "22px",
        fontFamily: "TeleGrotesk Next Bold",
        fontWeight: "unset",
        letterSpacing: 0
      },
      body: {
        fontSize: 16,
        lineHeight: "24px",
        fontFamily: "TeleGrotesk Next Medium",
        fontWeight: "unset",
        letterSpacing: 0
      },
      "body-short": {
        fontSize: 16,
        lineHeight: "20px",
        fontFamily: "TeleGrotesk Next Medium",
        fontWeight: "unset",
        letterSpacing: 0
      },
      "body-long": {
        fontSize: 16,
        lineHeight: "24px",
        fontFamily: "TeleGrotesk Next Medium",
        fontWeight: "unset",
        letterSpacing: 0
      },
      "body-large": {
        fontSize: 20,
        lineHeight: "32px",
        fontFamily: "TeleGrotesk Next Medium",
        fontWeight: "unset",
        letterSpacing: 0
      }
    }
  },
  components: {
    Button,
    Card,
    Link,
    Tag,
    Input
  }
};

export default theme;
