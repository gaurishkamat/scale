import React from "react"
import {
  ScaleButton,
  ScaleCard,
  ScaleLink,
  ScaleTag,
  ScaleTable,
  ScaleInput,
  ScaleText,
} from "@scaleds/components-react-telekom"
import { Link } from "gatsby"
import { useTable, useSortBy } from "react-table"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {

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
      <h3>Button</h3>
      <ScaleButton variant="primary">Click!</ScaleButton>
      <h3>Card</h3>
      <ScaleCard>A title</ScaleCard>
      <h3>Tag</h3>
      <ScaleTag dismissable size="small" onClose={event => console.log(event)}>
        A title
      </ScaleTag>
      <h3>Input</h3>
      <ScaleInput
        styles={{ input: { "& input": { color: "blue" } } }}
        value="initial value"
        onScaleChange={console.log}
      />
      
    </Layout>
  )
}

export default IndexPage
