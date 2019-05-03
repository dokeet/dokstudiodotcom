import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from '../components/Logo'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Logo/>


  </Layout>
)

export default IndexPage
