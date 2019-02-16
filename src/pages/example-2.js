import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Company from "../components/example-2/company-2";

const IndexPage = () => (
  <Layout>
    <SEO title="Example 2" keywords={[`gatsby`, `application`, `react`]} />
    <Company />
  </Layout>
);

export default IndexPage;
