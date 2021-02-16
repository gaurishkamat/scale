import React, { useRef } from "react"
import {
  ScaleButton,
  ScaleCard,
  ScaleLink,
  ScaleTag,
  ScaleInput,
  ScaleDatePicker
} from "@scaleds/components-react-telekom"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const dateRef = useRef(null)
  return (
    <Layout>
      <SEO title="Home" />
      <Link to="/404">404</Link>
      <Link to="/">Home</Link>
      <Link to="/modal">Modal</Link>
      <h3>Alert</h3>
      <ScaleLink href="http://example.com" target="_blank" variant="success">
        Success
      </ScaleLink>
      <ScaleDatePicker
        ref={dateRef}
        onScaleChange={console.log}
        onScaleFocus={console.log}
        onScaleBlur={console.log}
        value="2021-03-24"
      />
      <h3>Button</h3>
      <ScaleButton variant="primary" onClick={() => dateRef.current.show()}>
        Show date picker
      </ScaleButton>
      <h3>Card</h3>
      <ScaleCard>A title</ScaleCard>
      <h3>Tag</h3>
      <ScaleTag dismissable size="small" onClose={event => console.log(event)}>
        A title
      </ScaleTag>
      <h3>Input</h3>
      <ScaleInput
        styles={JSON.stringify({ input: { "& input": { color: "blue" } } })}
        value="initial value"
        onScaleChange={console.log}
      />
    </Layout>
  )
}

export default IndexPage
