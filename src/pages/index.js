import React from "react"
import { Provider } from "react-redux";
import { Playground, store } from "graphql-playground-react";
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Provider store={store}>
      <Playground endpoint="http://localhost:8080/graphql" />
    </Provider> 
  </Layout>
)

export default IndexPage
