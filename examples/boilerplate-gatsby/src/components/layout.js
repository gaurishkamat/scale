import React from "react"
import PropTypes from "prop-types"
import {
  ScaleAppShell,
  ScaleAppFooter
} from "@scaleds/components-react-telekom"

import "./layout.css"
import "@scaleds/components-telekom/dist/fonts/scale-fonts-telekom.css"
import {
  addonNavigation,
  footerNavigation,
  iconNavigation,
  mainNavigation,
  sectorNavigation
} from "./fixtures"

const Layout = ({ children }) => {
  return (
    <>
      <ScaleAppShell
        mainNavigation={mainNavigation}
        addonNavigation={addonNavigation}
        iconNavigation={iconNavigation}
        sectorNavigation={sectorNavigation}
        footerNavigation={footerNavigation}
        activeRouteId="Third Level 4"
        activeSectorId="Personal38"
      >
        {children}
      </ScaleAppShell>
      <ScaleAppFooter footerNavigation={footerNavigation} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
