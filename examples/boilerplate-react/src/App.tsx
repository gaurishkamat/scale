import React from "react";
import {
  ScaleButton,
  ScaleCard,
  ScaleLink,
  ScaleTag,
} from "@telekom/scale-components-react";

import '@telekom/scale-components/dist/scale-components/scale-components.css';
import "./App.css";
import TopBar from './TopBar/TopBar';
import Footer from './Footer/Footer';


const App = () => {
  return (
    <div>
      <TopBar>
      </TopBar>
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
      <Footer></Footer>
    </div>
  );
};

export default App;
