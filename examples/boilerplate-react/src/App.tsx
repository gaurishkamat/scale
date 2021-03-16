import React from "react";
import {
  ScaleButton,
  ScaleCard,
  ScaleLink,
  ScaleTag,
  ScaleAppShell,
  ScaleAppHeader,
  AppLogo,
  ScaleNavMain,
  AppMegaMenu,
  ScaleNavIcon,
  ScaleNavSegment
} from "@scaleds/components-react-telekom";

import "./App.css";

const App: React.FC = () => {
  const [isMegaMenuVisible, setMegaMenuVisible] = React.useState(false);

  return (
    <ScaleAppShell>
      <ScaleAppHeader slot="header" isMegaMenuVisible={isMegaMenuVisible}>
        <div slot="logo">
          <AppLogo
            onClick={console.log}
            claim
            href="#custom"
            logoTitle="Custom"
          ></AppLogo>
        </div>
        <div slot="menu-main">
          <ScaleNavMain isActive name="Menu item #1"></ScaleNavMain>
          <ScaleNavMain
            isMegaMenuVisible={isMegaMenuVisible}
            onMouseEnter={() => setMegaMenuVisible(true)}
            onMouseLeave={() => setMegaMenuVisible(false)}
            name="Menu item #2"
          >
            <AppMegaMenu>
              <div slot="custom-body">
                <h1>hello</h1>
              </div>
            </AppMegaMenu>
          </ScaleNavMain>
          <ScaleNavMain name="Menu item #3"></ScaleNavMain>
          <ScaleNavMain name="Menu item #4"></ScaleNavMain>
        </div>
        <div slot="menu-icon">
          <ScaleNavIcon onClick={console.log} icon="action-mute">
            Mute
          </ScaleNavIcon>
          <ScaleNavIcon icon="action-play">Play</ScaleNavIcon>
          <ScaleNavIcon icon="action-pause">Pause</ScaleNavIcon>
          <ScaleNavIcon icon="action-fast-forward">Forward</ScaleNavIcon>
          <ScaleNavIcon icon="action-favorite">Favorite</ScaleNavIcon>
        </div>
        <div slot="menu-sector">
          <ScaleNavSegment isActive href="/private">
            Private
          </ScaleNavSegment>
          <ScaleNavSegment href="/business">Business</ScaleNavSegment>
        </div>
        <div slot="menu-addon">
          <ScaleNavSegment
            href="/shop"
            onClick={(e: any) => {
              e.preventDefault();
              console.log("click shop");
            }}
          >
            Shop
          </ScaleNavSegment>
          <ScaleNavSegment isActive href="/contact">
            Contact
          </ScaleNavSegment>
        </div>
        <div slot="menu-mobile">
          <ul>
            <li>Custom item #1</li>
            <li>Custom item #2</li>
            <li>Custom item #3</li>
            <li>Custom item #4</li>
          </ul>
        </div>
      </ScaleAppHeader>
      <h1>React App</h1>
      <h3>Alert</h3>
      <ScaleLink href="http://example.com" target="_blank" variant="success">
        Success
      </ScaleLink>
      <h3>Button</h3>
      <ScaleButton variant="primary">Click!</ScaleButton>
      <h3>Card</h3>
      <ScaleCard>A title</ScaleCard>
      <h3>Tag</h3>
      <ScaleTag
        dismissable
        size="small"
        onScaleClose={(event: any) => console.log(event)}
      >
        A title
      </ScaleTag>
      <div className="block">One</div>
      <div className="block">One</div>
      <div className="block">One</div>
      <div className="block">One</div>
      <div className="block">One</div>
      <div className="block">One</div>
    </ScaleAppShell>
  );
};

export default App;
