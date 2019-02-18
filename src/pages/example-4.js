import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Company from "../components/example-4/company"

const IndexPage = () => (
  <Layout>
    <SEO title="Example 4" keywords={[`gatsby`, `application`, `react`]} />
    <Company />
  </Layout>
)

export default IndexPage
