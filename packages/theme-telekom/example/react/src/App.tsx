import React from "react";
import {
  ScaleButton,
  ScaleCard,
  ScaleLink,
  ScaleText,
  ScaleInput,
  ScaleTag
} from "@scaleds/components-react";
import "./App.css";

const icons = {
  star:
    "M16.471,8.321 L12.613594,0.502886112 L8.755,8.321 L0.126435258,9.57533801 L6.37,15.66 L4.89610548,24.2548735 L12.613,20.197 L20.3310826,24.2548735 L18.856,15.66 L25.1007528,9.57533801 L16.471,8.321 Z M9.41891527,9.23556376 L12.613,2.761 L15.8082728,9.23556376 L22.951,10.273 L17.7826928,15.3122039 L19.003,22.427 L12.613594,19.067774 L6.223,22.427 L7.44449521,15.3122039 L2.275,10.273 L9.41891527,9.23556376 Z"
};

const App: React.FC = () => {
  const handleClick = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    alert("Telekom!");
  };
  return (
    <div className="App">
      <div className="grid">
        <h4>Enabled</h4>
        <h4>Hover</h4>
        <h4>Active / Selected</h4>
        <h4>Focus</h4>
        <h4>Disabled</h4>
      </div>
      <div>
        <h3>Primary</h3>
        <div className="grid">
          <ScaleButton iconBefore={icons.star} onClick={handleClick}>
            Learn more
          </ScaleButton>
          <ScaleButton onClick={handleClick} className="hover">
            Learn more
          </ScaleButton>
          <ScaleButton onClick={handleClick} className="active">
            Learn more
          </ScaleButton>
          <ScaleButton onClick={handleClick} className="focus">
            Learn more
          </ScaleButton>
          <ScaleButton onClick={handleClick} disabled>
            Learn more
          </ScaleButton>
        </div>
      </div>
      <div>
        <h3>Secondary</h3>
        <div className="grid">
          <ScaleButton onClick={handleClick} variant="secondary">
            Learn more
          </ScaleButton>
          <ScaleButton
            onClick={handleClick}
            variant="secondary"
            className="hover"
          >
            Learn more
          </ScaleButton>
          <ScaleButton
            onClick={handleClick}
            variant="secondary"
            className="active"
          >
            Learn more
          </ScaleButton>
          <ScaleButton
            onClick={handleClick}
            variant="secondary"
            className="focus"
          >
            Learn more
          </ScaleButton>
          <ScaleButton onClick={handleClick} variant="secondary" disabled>
            Learn more
          </ScaleButton>
        </div>
      </div>
      <div>
        <h3>Primary small</h3>
        <div className="grid">
          <ScaleButton
            iconBefore={icons.star}
            onClick={handleClick}
            iconSize={16}
            size="small"
          >
            Learn more
          </ScaleButton>
          <ScaleButton
            onClick={handleClick}
            iconSize={16}
            size="small"
            className="hover"
          >
            Learn more
          </ScaleButton>
          <ScaleButton
            onClick={handleClick}
            iconSize={16}
            size="small"
            className="active"
          >
            Learn more
          </ScaleButton>
          <ScaleButton
            onClick={handleClick}
            iconSize={16}
            size="small"
            className="focus"
          >
            Learn more
          </ScaleButton>
          <ScaleButton
            onClick={handleClick}
            iconSize={16}
            size="small"
            disabled
          >
            Learn more
          </ScaleButton>
        </div>
      </div>
      <div>
        <h3>Secondary small</h3>
        <div className="grid">
          <ScaleButton
            onClick={handleClick}
            iconSize={16}
            size="small"
            variant="secondary"
          >
            Learn more
          </ScaleButton>
          <ScaleButton
            onClick={handleClick}
            iconSize={16}
            size="small"
            variant="secondary"
            className="hover"
          >
            Learn more
          </ScaleButton>
          <ScaleButton
            onClick={handleClick}
            iconSize={16}
            size="small"
            variant="secondary"
            className="active"
          >
            Learn more
          </ScaleButton>
          <ScaleButton
            onClick={handleClick}
            iconSize={16}
            size="small"
            variant="secondary"
            className="focus"
          >
            Learn more
          </ScaleButton>
          <ScaleButton
            onClick={handleClick}
            iconSize={16}
            size="small"
            variant="secondary"
            disabled
          >
            Learn more
          </ScaleButton>
        </div>
      </div>
      <div>
        <h3>Icon only</h3>
        <div className="grid">
          <ScaleButton icon={icons.star} onClick={handleClick} />
          <ScaleButton
            icon={icons.star}
            onClick={handleClick}
            className="hover"
          />
          <ScaleButton
            icon={icons.star}
            onClick={handleClick}
            className="active"
          />
          <ScaleButton
            icon={icons.star}
            onClick={handleClick}
            className="focus"
          />
          <ScaleButton icon={icons.star} onClick={handleClick} disabled />
        </div>
      </div>
      <div>
        <h3>Icon only secondary</h3>
        <div className="grid">
          <ScaleButton
            icon={icons.star}
            onClick={handleClick}
            variant="secondary"
          />
          <ScaleButton
            icon={icons.star}
            onClick={handleClick}
            variant="secondary"
            className="hover"
          />
          <ScaleButton
            icon={icons.star}
            onClick={handleClick}
            variant="secondary"
            className="active"
          />
          <ScaleButton
            icon={icons.star}
            onClick={handleClick}
            variant="secondary"
            className="focus"
          />
          <ScaleButton
            icon={icons.star}
            onClick={handleClick}
            variant="secondary"
            disabled
          />
        </div>
      </div>
      <div>
        <h3>Icon only small</h3>
        <div className="grid">
          <ScaleButton
            icon={icons.star}
            iconSize={16}
            size="small"
            onClick={handleClick}
          />
          <ScaleButton
            icon={icons.star}
            iconSize={16}
            size="small"
            onClick={handleClick}
            className="hover"
          />
          <ScaleButton
            icon={icons.star}
            iconSize={16}
            size="small"
            onClick={handleClick}
            className="active"
          />
          <ScaleButton
            icon={icons.star}
            iconSize={16}
            size="small"
            onClick={handleClick}
            className="focus"
          />
          <ScaleButton
            icon={icons.star}
            iconSize={16}
            size="small"
            onClick={handleClick}
            disabled
          />
        </div>
      </div>
      <div>
        <h3>Icon only small secondary</h3>
        <div className="grid">
          <ScaleButton
            icon={icons.star}
            iconSize={16}
            size="small"
            onClick={handleClick}
            variant="secondary"
          />
          <ScaleButton
            icon={icons.star}
            iconSize={16}
            size="small"
            onClick={handleClick}
            variant="secondary"
            className="hover"
          />
          <ScaleButton
            icon={icons.star}
            iconSize={16}
            size="small"
            onClick={handleClick}
            variant="secondary"
            className="active"
          />
          <ScaleButton
            icon={icons.star}
            iconSize={16}
            size="small"
            onClick={handleClick}
            variant="secondary"
            className="focus"
          />
          <ScaleButton
            icon={icons.star}
            iconSize={16}
            size="small"
            onClick={handleClick}
            variant="secondary"
            disabled
          />
        </div>
      </div>
      <div>
        <h3>ScaleCard</h3>
        <div>
          <ScaleCard>
            <p style={{ margin: 0 }}>This is a card element</p>
          </ScaleCard>
        </div>
        <div style={{ marginTop: "24px" }}>
          <ScaleCard href="http://example.com" target="_blank">
            <p>This is a clickable card element</p>
          </ScaleCard>
        </div>
        <div style={{ marginTop: "24px" }}>
          <ScaleCard interactive>
            <p>This is a interactive card element</p>
          </ScaleCard>
        </div>
        <div style={{ marginTop: "24px" }}>
          <ScaleCard interactive disabled>
            <p>This is a disabled card element</p>
          </ScaleCard>
        </div>
      </div>
      <div>
        <h3>ScaleLink</h3>
        <div>
          <div>
            <ScaleLink>I'm a link</ScaleLink>
          </div>
          <div>
            <ScaleLink icon={icons.star} iconSize={16}>
              I'm a grid
            </ScaleLink>
          </div>
          <ScaleLink block>I'm a block link</ScaleLink>
          <ScaleLink icon={icons.star} iconSize={16} block>
            I'm a block link with icon
          </ScaleLink>
        </div>
      </div>
      <div>
        <h3>Text</h3>
        <div>
          <ScaleText tag="h1" variant="h1">
            h1 heading
          </ScaleText>
          <ScaleText tag="h2" variant="h2">
            h2 heading
          </ScaleText>
          <ScaleText tag="h3" variant="h3">
            h3 heading
          </ScaleText>
          <ScaleText tag="h4" variant="h4">
            h4 heading
          </ScaleText>
          <ScaleText tag="h5" variant="h5">
            h5 heading
          </ScaleText>
          <ScaleText tag="h6" variant="h6">
            h6 heading
          </ScaleText>
          <ScaleText>Body text</ScaleText>
          <ScaleText variant="body-short">Body short</ScaleText>
          <ScaleText variant="body-long">Body long</ScaleText>
          <ScaleText variant="body-large">Body large</ScaleText>
        </div>
      </div>
      <div>
        <h3>ScaleTag</h3>
        <div style={{ marginBottom: 24 }}>
          <ScaleTag>Label</ScaleTag>
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleTag size="small">Label</ScaleTag>
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleTag href="http://example.com" target="_blank">
            Label
          </ScaleTag>
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleTag dismissable>Label</ScaleTag>
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleTag size="small" dismissable>
            Label
          </ScaleTag>
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleTag dismissable href="http://example.com" target="_blank">
            Label
          </ScaleTag>
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleTag
            size="small"
            dismissable
            href="http://example.com"
            target="_blank"
          >
            Label
          </ScaleTag>
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleTag disabled>Label</ScaleTag>
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleTag disabled dismissable>
            Label
          </ScaleTag>
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleTag
            disabled
            dismissable
            href="http://example.com"
            target="_blank"
          >
            Label
          </ScaleTag>
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleTag variant="secondary">Label</ScaleTag>
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleTag variant="secondary" size="small">
            Label
          </ScaleTag>
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleTag
            variant="secondary"
            href="http://example.com"
            target="_blank"
          >
            Label
          </ScaleTag>
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleTag variant="secondary" dismissable>
            Label
          </ScaleTag>
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleTag variant="secondary" size="small" dismissable>
            Label
          </ScaleTag>
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleTag
            variant="secondary"
            dismissable
            href="http://example.com"
            target="_blank"
          >
            Label
          </ScaleTag>
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleTag
            variant="secondary"
            size="small"
            dismissable
            href="http://example.com"
            target="_blank"
          >
            Label
          </ScaleTag>
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleTag variant="secondary" disabled>
            Label
          </ScaleTag>
        </div>
      </div>
      <div>
        <h3>ScaleInput</h3>
        <div style={{ marginBottom: 24 }}>
          <ScaleInput label="First Name" variant="animated" />
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleInput
            label="Last Name"
            variant="animated"
            counter
            maxLength={24}
          />
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleInput
            label="address"
            variant="animated"
            required
            status="error"
            helperText="please fill out this field"
          />
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleInput
            placeholder="Placeholder"
            variant="animated"
            label="Label"
          />
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleInput disabled label="label" variant="animated" />
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleInput
            status="error"
            variant="animated"
            helperText="too many characters"
            maxLength={24}
            label="label"
            counter
          />
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleInput size="small" label="label" variant="animated" />
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleInput
            input-Id="checkbox"
            type="checkbox"
            value="1"
            label="checkbox"
            icon="M21.15,4.85 L9,17.05 L3.3,11.3 C2.9,10.9 2.3,10.9 1.9,11.3 C1.5,11.7 1.5,12.3 1.9,12.7 L9,19.85 L22.6,6.25 C23,5.85 23,5.25 22.6,4.85 C22.2,4.45 21.55,4.5 21.15,4.85 Z"
            name="nameOfCheckbox"
          ></ScaleInput>
          <ScaleInput
            input-Id="checkbox"
            type="checkbox"
            value="2"
            label="another checkbox"
            icon="M21.15,4.85 L9,17.05 L3.3,11.3 C2.9,10.9 2.3,10.9 1.9,11.3 C1.5,11.7 1.5,12.3 1.9,12.7 L9,19.85 L22.6,6.25 C23,5.85 23,5.25 22.6,4.85 C22.2,4.45 21.55,4.5 21.15,4.85 Z"
            name="nameOfCheckbox"
          ></ScaleInput>
          <ScaleInput
            input-Id="checkbox"
            type="checkbox"
            value="3"
            disabled={true}
            label="disabled checkbox"
            name="nameOfCheckbox"
          ></ScaleInput>
          <ScaleInput
            input-Id="checkbox"
            type="checkbox"
            value="4"
            status="error"
            label="checkbox with error"
            icon="M21.15,4.85 L9,17.05 L3.3,11.3 C2.9,10.9 2.3,10.9 1.9,11.3 C1.5,11.7 1.5,12.3 1.9,12.7 L9,19.85 L22.6,6.25 C23,5.85 23,5.25 22.6,4.85 C22.2,4.45 21.55,4.5 21.15,4.85 Z"
            name="nameOfCheckbox"
          ></ScaleInput>
          <ScaleInput
            input-Id="checkbox"
            type="checkbox"
            value="5"
            label="disabled checked checkbox"
            pre-checked={true}
            icon="M21.15,4.85 L9,17.05 L3.3,11.3 C2.9,10.9 2.3,10.9 1.9,11.3 C1.5,11.7 1.5,12.3 1.9,12.7 L9,19.85 L22.6,6.25 C23,5.85 23,5.25 22.6,4.85 C22.2,4.45 21.55,4.5 21.15,4.85 Z"
            name="nameOfCheckbox"
          ></ScaleInput>
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleInput
            type="radio"
            value="1"
            label="One"
            name="radioSelect"
            input-Id="choiceOne"
          ></ScaleInput>
          <ScaleInput
            type="radio"
            value="2"
            label="Two"
            name="radioSelect"
            input-Id="choiceTwo"
          ></ScaleInput>
          <ScaleInput
            type="radio"
            value="3"
            label="Three"
            name="radioSelect"
            input-Id="choiceThree"
          ></ScaleInput>
          <ScaleInput
            type="radio"
            value="3"
            label="disabled radio"
            name="radioSelect"
            input-Id="choiceFour"
            disabled={true}
          ></ScaleInput>
          <ScaleInput
            type="radio"
            value="4"
            label="radio with error"
            name="radioSelect"
            input-Id="choiceFive"
            status="error"
          ></ScaleInput>
          <ScaleInput
            type="radio"
            value="5"
            label="disabled checked radio"
            name="radioSelect"
            disabled={true}
            pre-checked={true}
            input-Id="choiceSix"
          ></ScaleInput>
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleInput
            type="textarea"
            rows={6}
            cols={50}
            label="textarea label"
            variant="animated"
            disable-resize={true}
          ></ScaleInput>
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleInput
            type="textarea"
            rows={4}
            cols={40}
            label="textarea with helper info text"
            variant="animated"
            status="info"
            helper-text="this is an info message"
          ></ScaleInput>
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleInput
            type="textarea"
            rows={4}
            cols={40}
            label="textarea with helper info text"
            variant="animated"
            status="error"
            helper-text="error occurs"
          ></ScaleInput>
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleInput
            type="textarea"
            rows={4}
            cols={40}
            label="textarea with helper info text"
            variant="animated"
            counter={true}
            max-length={512}
          ></ScaleInput>
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleInput
            type="textarea"
            rows={4}
            cols={40}
            variant="animated"
            label="disabled textarea"
            disabled={true}
          ></ScaleInput>
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleInput type="select" variant="animated" label="basic select box">
            <option hidden selected></option>
            <option value="1">item 1</option>
            <option value="2">item 2</option>
            <option value="3">item 3</option>
          </ScaleInput>
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleInput
            type="select"
            variant="animated"
            label="basic select box with icon"
            icon="M6.19274639,9.03397641 C8.14145643,9.01132547 10.0768839,9 11.9990287,9 C13.9211735,9 15.8572671,9.01134198 17.8073096,9.03402594 C18.050708,9.2495235 18.0635185,9.59186709 17.8457409,9.82071688 L17.8073096,9.85776643 L11.9993017,15 L6.19263449,9.8577169 C5.93574481,9.63021989 5.93579491,9.26141871 6.19274639,9.03397641 Z"
          >
            <option hidden selected></option>
            <option value="1">item 1</option>
            <option value="2">item 2</option>
            <option value="3">item 3</option>
          </ScaleInput>
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleInput
            variant="static"
            label="multi select with opt group"
            type="select"
            input-id="select box"
            icon="M6.19274639,9.03397641 C8.14145643,9.01132547 10.0768839,9 11.9990287,9 C13.9211735,9 15.8572671,9.01134198 17.8073096,9.03402594 C18.050708,9.2495235 18.0635185,9.59186709 17.8457409,9.82071688 L17.8073096,9.85776643 L11.9993017,15 L6.19263449,9.8577169 C5.93574481,9.63021989 5.93579491,9.26141871 6.19274639,9.03397641 Z"
          >
            <optgroup label="Category 1">
              <option value="A">option A</option>
              <option value="B">option B</option>
            </optgroup>
            <optgroup label="Category 2">
              <option value="one">option one</option>
              <option value="two">option two</option>
            </optgroup>
          </ScaleInput>
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleInput
            variant="animated"
            label="select with error"
            status="error"
            helper-text="error occurs"
            type="select"
            input-id="select box"
            icon="M6.19274639,9.03397641 C8.14145643,9.01132547 10.0768839,9 11.9990287,9 C13.9211735,9 15.8572671,9.01134198 17.8073096,9.03402594 C18.050708,9.2495235 18.0635185,9.59186709 17.8457409,9.82071688 L17.8073096,9.85776643 L11.9993017,15 L6.19263449,9.8577169 C5.93574481,9.63021989 5.93579491,9.26141871 6.19274639,9.03397641 Z"
          >
            <option hidden selected></option>
            <option value="1">item A</option>
            <option value="2">item B</option>
            <option value="3">item C</option>
          </ScaleInput>
        </div>
        <div style={{ marginBottom: 24 }}>
          <ScaleInput
            type="select"
            variant="animated"
            label="basic select box"
            disabled={true}
          >
            <option hidden selected></option>
            <option value="1">item 1</option>
            <option value="2">item 2</option>
            <option value="3">item 3</option>
          </ScaleInput>
        </div>
      </div>
    </div>
  );
};

export default App;
