import React from "react"
import GraphiQLWrapper from "../../components/GraphiQL"

export const editorConstants = [
  {
    text: (
      <span>
        It's a one-liner to bring up Dgraph with GraphQL.{" "}
        <i>
          Note: The Dgraph standalone image is great for quick start and
          exploring, but it's not meant for production use. Once you want to
          build an App or persist your data for restarts, you'll need to review
          the <u>admin docs.</u>
        </i>
      </span>
    ),
    CustomComponent: () => {
      return (
        <>
          <GraphiQLWrapper />
        </>
      )
    }
  },
  {
    text: (
      <span>
        It's a one-liner to bring up Dgraph with GraphQL.{" "}
        <i>
          Note: The Dgraph standalone image is great for quick start and
          exploring, but it's not meant for production use. Once you want to
          build an App or persist your data for restarts, you'll need to review
          the <u>admin docs.</u>
        </i>
      </span>
    ),
    CustomComponent: () => {
      return (
        <>
          <GraphiQLWrapper />
        </>
      )
    }
  },
  {
    text: (
      <span>
        It's a one-liner to bring up Dgraph with GraphQL.{" "}
        <i>
          Note: The Dgraph standalone image is great for quick start and
          exploring, but it's not meant for production use. Once you want to
          build an App or persist your data for restarts, you'll need to review
          the <u>admin docs.</u>
        </i>
      </span>
    ),
    CustomComponent: () => {
      return (
        <>
          <GraphiQLWrapper />
        </>
      )
    }
  }
]
