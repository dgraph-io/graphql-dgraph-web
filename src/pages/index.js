import React from "react"
import Layout from "../components/layout"
import "bootstrap/dist/css/bootstrap.min.css"
import "graphiql/graphiql.css"
import SEO from "../components/seo"
import GraphiQLWrapper from "../components/GraphiQL"

const query = `{
  queryUser {
    id
    firstName
    email
    orgs {
      org {
        name
        id
        users {
          role
          user {
            firstName
            email
          }
        }
      }
    }
  }
}`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <GraphiQLWrapper defaultQuery={query} />
    {/* <Provider store={store}>
      <Playground endpoint="http://localhost:8080/graphql" createApolloLink={graphQLFetcher}/>
    </Provider> */}
  </Layout>
)

export default IndexPage
