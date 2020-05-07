import React from "react"
import Layout from "../components/layout"
import "bootstrap/dist/css/bootstrap.min.css"
import "graphiql/graphiql.css"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    These docs tell you everything you need to know about Dgraph's GraphQL API.
    <ul>
      <li>
        <Link to="/quick-start">Quick Start</Link>
      </li>
      <li>
        <Link to="/schema">Schema</Link>
      </li>
      <li>
        <Link to="/api">The API</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
