import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Main from "./main"

const IndexPage = () => (
  <Layout>
    <Seo title="happy new Year!" />
    <Main />
  </Layout>
)

export default IndexPage
