import React from "react"
import Layout from "../components/layout"
import "../assets/style/custom.scss"
import "graphiql/graphiql.css"
import SEO from "../components/seo"
import { Link } from "gatsby"


const IndexPage = () => (
  <Layout>
    
    <h1 className="page-title">GraphQL with Dgraph</h1>
    <div className="spacing-title-summary">
      These docs tell you everything you need to know about Dgraph's GraphQL
      API.
    </div>
    <div>
      <div>
        <Link to="/documentationReference">
          <h2 className="page-title-summary pink-link">Quick Start</h2>
        </Link>
        <div className="spacing-title-summary">
          Let’s go from nothing to a running GraphQL API in just two steps.
        </div>
      </div>
      <div>
        <Link to="/api">
          <h2 className="page-title-summary pink-link">The API</h2>
        </Link>
        <div className="spacing-title-summary">How to use the GraphQL API.</div>
      </div>
      <div>
        <Link to="/example">
          <h2 className="page-title-summary pink-link">Example</h2>
        </Link>
        <div className="spacing-title-summary">
          A worked example of how to build a GraphQL API for an App.
        </div>
      </div>
      <div>
        <Link to="/schema">
          <h2 className="page-title-summary pink-link">Schema</h2>
        </Link>
        <div className="spacing-title-summary">
          All the things you can put in your input GraphQL schema, and what gets
          generated from that.
        </div>
      </div>
      <div>
        <Link to="/authorization">
          <h2 className="page-title-summary pink-link">Authorization</h2>
        </Link>
        <div className="spacing-title-summary">
          Dgraph GraphQL comes with inbuilt authorization.
        </div>
      </div>
      <div>
        <Link to="/custom">
          <h2 className="page-title-summary pink-link">Custom Resolvers</h2>
        </Link>
        <div className="spacing-title-summary">Adding custom logic.</div>
      </div>
      <div>
        <Link to="/todo-app-tutorial">
          <h2 className="page-title-summary pink-link">Todo App Tutorial</h2>
        </Link>
        <div className="spacing-title-summary">Building a simple Todo App</div>
      </div>
      <div>
        <Link to="/slash-quick-start">
          <h2 className="page-title-summary pink-link">
            Slash Quick Start (draft)
          </h2>
        </Link>
        <div className="spacing-title-summary">
          These are draft docs for Slash GraphQL, which is currently in beta
        </div>
      </div>
      <div>
        <Link to="/admin">
          <h2 className="page-title-summary pink-link">Admin</h2>
        </Link>
        <div className="spacing-title-summary">
          The admin API and how to run Dgraph with GraphQL.
        </div>
      </div>
      <div>
        <Link to="/dgraph">
          <h2 className="page-title-summary pink-link">
            GraphQL on Existing Dgraph
          </h2>
        </Link>
        <div className="spacing-title-summary">
          How to use GraphQL on an existing Dgraph instance.
        </div>
      </div>
    </div>

    <div className="note">
      Note: More docs and examples will be added soon, remember to check back.
    </div>
  </Layout>
)

export default IndexPage
