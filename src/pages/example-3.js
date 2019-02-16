import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Company from "../components/example-3/company-3";

const IndexPage = () => (
  <Layout>
    <SEO title="Example 3" keywords={[`gatsby`, `application`, `react`]} />
    <Company />
  </Layout>
);

export default IndexPage;
