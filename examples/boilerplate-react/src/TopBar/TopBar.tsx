import React from "react";
import { ScaleAppHeader, ScaleNavSegment } from "@telekom/scale-components-react";

import { mainNavigation } from "./data/mainNavigation";
import { iconNavigation } from "./data/iconNavigation";
import { sectorNavigation } from "./data/sectorNavigation";

const TopBar: React.FC = () => {
  return (
    <div>
		<ScaleAppHeader
			id="header"
			custom-class="customClass"
			mainNavigation={mainNavigation}
			iconNavigation={iconNavigation}
			sectorNavigation={sectorNavigation}
			activeRouteId="Third Level 24"
			activeSectorId="Personal38"
			>
			<div slot="menu-addon">
    			<ScaleNavSegment is-active="true" href="#custom-addon-1">
      				Custom Addon #1
    			</ScaleNavSegment>
    			<ScaleNavSegment href="#custom-addon-2">
      				Custom Addon #2
    			</ScaleNavSegment>
 			</div>	
		</ScaleAppHeader>
    </div>
  );
};

export default TopBar;
