import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Company from "../components/example-1/company-1";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Company />
  </Layout>
);

export default IndexPage;
