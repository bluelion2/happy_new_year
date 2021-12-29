import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Main from "../components/main"

const IndexPage = () => {
  console.log(
    "코드를 보고 싶으시다면 \nhttps://github.com/bluelion2/happy_new_year 로 방문해주세요!"
  )
  return (
    <Layout>
      <Seo title="새해 복 많이 받으세요." />
      <Main />
    </Layout>
  )
}

export default IndexPage
