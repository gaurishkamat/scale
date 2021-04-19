import React, { useState } from "react";
import { ScaleButton, ScaleTextField, ScaleDropdown, ScaleCheckbox, ScaleTextarea } from "@scaleds/telekom-components-react";
import "./App.css";

const App: React.FC = () => {
  const [formValues, setFormValues] = useState({});

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formValues);
  };

  const handleChange = (event: any, name: string) => {
    if (event.target && event.target.value) {
      setFormValues({ ...formValues, [name]: event.target.value });
    }
  };

  return (
    <div
      className="App"
      style={{
        width: "800px",
        margin: "auto",
        background: "#eee",
        padding: "3rem"
      }}
    >
      <h1>Form</h1>
      <form onSubmit={event => handleSubmit(event)}>
        <ScaleDropdown
          label="Customer"
          required
          onScaleChange={event => handleChange(event, "customer")}
          inputId="select-customer"
          transparent={true}
        >
          <option value="home os">HomeOS</option>
          <option value="2">item 2</option>
          <option value="3">item 3</option>
          <option hidden disabled selected value="" />
        </ScaleDropdown>
        <ScaleDropdown
          label="Application"
          required
          transparent={true}
          onScaleChange={event => handleChange(event, "application")}
          inputId="select-application"
        >
          <option value="messaging">HomeOs Messaging</option>
          <option value="other">Other</option>
          <option hidden disabled selected value="" />
        </ScaleDropdown>
        <ScaleCheckbox
          inputId="notification"
          value="1"
          label="Enable data or silent push"
          onScaleChange={event => handleChange(event, "notification")}
          icon="M21.15,4.85 L9,17.05 L3.3,11.3 C2.9,10.9 2.3,10.9 1.9,11.3 C1.5,11.7 1.5,12.3 1.9,12.7 L9,19.85 L22.6,6.25 C23,5.85 23,5.25 22.6,4.85 C22.2,4.45 21.55,4.5 21.15,4.85 Z"
          name="nameOfCheckbox"
        ></ScaleCheckbox>
        <ScaleTextField
          label="Title"
          transparent={true}
          onScaleChange={event => handleChange(event, "notification")}
        ></ScaleTextField>
        <ScaleTextarea
          rows={10}
          cols={70}
          label="Message"
          maxLength={2000}
          transparent={true}
          counter={true}
          helperText='To insert an Emoji press "Win *."(Windows 10) or "Command + Control + Space"(Mac)'
          onScaleChange={event => handleChange(event, "message")}
        ></ScaleTextarea>
        <ScaleTextField
          label="Device Type"
          transparent={true}
          onScaleChange={event => handleChange(event, "deviceType")}
        ></ScaleTextField>
        <ScaleTextField
          label="Language"
          transparent={true}
          onScaleChange={event => handleChange(event, "language")}
        ></ScaleTextField>
        <ScaleTextField
          label="Location"
          transparent={true}
          onScaleChange={event => handleChange(event, "location")}
        ></ScaleTextField>
        <ScaleButton>Submit</ScaleButton>
      </form>
    </div>
  );
};

export default App;
