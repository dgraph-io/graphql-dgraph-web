import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Accordion } from "react-bootstrap"

const SideBar = props => {
  const data = useStaticQuery(graphql`
    {
      allMdx(sort: { fields: fields___order }) {
        edges {
          node {
            fields {
              slug
              order
              title
              valParent
              mainParent
            }
          }
        }
      }
    }
  `)

  function isActive({ isCurrent }) {
    return isCurrent ? { className: "active" } : null
  }

  function addChildren(child) {
    currentChildren.push(child)
  }

  function addIndex(child) {
    currentIndex.push(child)
  }

  function addNodes(field) {
    if (field.slug.split("/").reverse()[0] !== "index") {
      let child = (
        <li key={field.title}>
          <Link to={field.slug} getProps={isActive}>
            {field.title}
          </Link>
        </li>
      )
      addChildren(child)
    } else {
      let index = (
        <li key={field.title}>
          <Link to={field.slug.replace("index", "")} getProps={isActive}>
            {field.title}
          </Link>
        </li>
      )
      addIndex(index)
    }
  }

  function renderResult() {
    const res = (
      <React.Fragment>
        <Accordion>
          <Accordion.Toggle as="span" eventKey="0">
            {currentIndex}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <ul style={{ listStyle: "none" }}>{currentChildren}</ul>
          </Accordion.Collapse>
        </Accordion>
      </React.Fragment>
    )
    currentChildren = []
    currentIndex = []
    return res
  }

  let currentChildren = []
  let currentIndex = []
  let currentParents = []
  let currentOrder = data.allMdx.edges[0].node.fields.order

  const list = (
    <React.Fragment>
      <ul className="sidenav">
        {data.allMdx.edges.map(({ node }, index) => {
          const { fields } = node
          if (fields.slug.split("/").length == 2) {
            if (currentOrder != fields.order) {
              currentOrder = fields.order
              const res = (
                <li key={fields.title}>
                  <Link to={fields.slug} getProps={isActive}>
                    {fields.title}
                  </Link>
                </li>
              )
              return (
                <React.Fragment>
                  {renderResult()}
                  {res}
                </React.Fragment>
              )
            }
            currentOrder = fields.order
            return (
              <li key={fields.title}>
                <Link to={fields.slug} getProps={isActive}>
                  {fields.title}
                </Link>
              </li>
            )
          } else {
            
            if (currentOrder == fields.order) {
              addNodes(fields)
              currentOrder = fields.order
              if (index + 1 == data.allMdx.edges.length) {
                return (
                  <React.Fragment>
                    {renderResult()}
                  </React.Fragment>
                ) 
              }
            } else {
              const res = renderResult()
              addNodes(fields)
              currentOrder = fields.order
              return (
                <React.Fragment>
                  {res}
                </React.Fragment>
              )
            }
          }
        })}
      </ul>
    </React.Fragment>
  )

  return list
}

export default SideBar
