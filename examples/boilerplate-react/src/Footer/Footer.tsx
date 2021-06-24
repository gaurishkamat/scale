import React from "react";
import { ScaleAppFooter } from "@telekom/scale-components-react";

import { footerNavigation } from "./footerNavigation";

const Footer = () => {
  return (
    <div>
		<ScaleAppFooter
			claim-lang="en"
    		footerNavigation={footerNavigation}
		>
			Test
		</ScaleAppFooter>
    </div>
  );
};

export default Footer;
