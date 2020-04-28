import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const SideBar = props => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { extension: { eq: "mdx" } }
        sort: { fields: relativeDirectory }
      ) {
        edges {
          node {
            extension
            name
            relativeDirectory
            children {
              ... on Mdx {
                id
                frontmatter {
                  title
                  path
                }
              }
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

  let currentParent = ""
  let currentChildren = []
  let currentIndex = []
  const list = (
    <React.Fragment>
      <ul style={{ position: "absolute", listStyle: "none" }}>
        {data.allFile.edges.map((edge, index) => {
          if (
            edge.node.relativeDirectory !== "" &&
            (currentParent === "" ||
              currentParent === edge.node.relativeDirectory)
          ) {
            currentParent = edge.node.relativeDirectory
            if (edge.node.name !== "index") {
              let child = (
                <li key={edge.node.name}>
                  <Link
                    to={
                      "/" + edge.node.relativeDirectory + "/" + edge.node.name
                    }
                    getProps={isActive}
                  >
                    {edge.node.children[0].frontmatter.title}
                  </Link>
                </li>
              )
              addChildren(child)
            } else {
              let index = (
                <li key={edge.node.name}>
                  <Link
                    to={"/" + edge.node.relativeDirectory}
                    getProps={isActive}
                  >
                    {edge.node.children[0].frontmatter.title}
                  </Link>
                </li>
              )
              addIndex(index)
            }
            if (index + 1 === data.allFile.edges.length) {
              const res = (
                <React.Fragment>
                  {currentIndex}
                  <ul style={{ listStyle: "none" }}>
                    {currentChildren}
                  </ul>
                </React.Fragment>
              )
              return res
            }
            return
          } else if (
            currentParent !== edge.node.relativeDirectory &&
            currentParent !== ""
          ) {
            let res
            if (edge.node.relativeDirectory === "") {
              res = (
                <React.Fragment>
                  {currentIndex}
                  <ul style={{ listStyle: "none" }}>
                    {currentChildren}
                  </ul>
                  <li key={edge.node.name}>
                    <Link to={"/" + edge.node.name} getProps={isActive}>
                      {edge.node.children[0].frontmatter.title}
                    </Link>
                  </li>
                </React.Fragment>
              )
              currentIndex = []
              currentParent = ""
              currentChildren = []
            } else {
              res = (
                <React.Fragment>
                  {currentIndex}
                  <ul style={{ listStyle: "none" }}>
                    {currentChildren}
                  </ul>
                </React.Fragment>
              )
              currentIndex = []
              currentParent = ""
              currentChildren = []
              currentParent = edge.node.relativeDirectory
              if (edge.node.name !== "index") {
                let child = (
                  <li key={edge.node.name}>
                    <Link
                      to={
                        "/" + edge.node.relativeDirectory + "/" + edge.node.name
                      }
                      getProps={isActive}
                    >
                      {edge.node.children[0].frontmatter.title}
                    </Link>
                  </li>
                )
                addChildren(child)
              } else {
                let index = (
                  <li key={edge.node.name}>
                    <Link
                      to={"/" + edge.node.relativeDirectory}
                      getProps={isActive}
                    >
                      {edge.node.children[0].frontmatter.title}
                    </Link>
                  </li>
                )
                addIndex(index)
              }
            }
            return res
          }

          return (
            <li key={edge.node.name}>
              <Link to={"/" + edge.node.name} getProps={isActive}>
                {edge.node.children[0].frontmatter.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </React.Fragment>
  )
  return list
}

export default SideBar
