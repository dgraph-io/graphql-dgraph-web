import React from "react"
import Layout from "../components/layout"
import "bootstrap/dist/css/bootstrap.min.css"
import "graphiql/graphiql.css"
import SEO from "../components/seo"
import GraphiQLWrapper from "../components/GraphiQL"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <GraphiQLWrapper />
  </Layout>
)

export default IndexPage
