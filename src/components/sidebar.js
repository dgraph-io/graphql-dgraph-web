import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const SideBar = props => {

  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { extension: { eq: "mdx" } }
        sort: { fields: childMdx___frontmatter___order }
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

  function addNodes(node) {
    if (node.name !== "index") {
      let child = (
        <li key={node.children[0].frontmatter.title}>
          <Link
            to={
              "/" + node.relativeDirectory + "/" + node.name
            }
            getProps={isActive}
          >
            {node.children[0].frontmatter.title}
          </Link>
        </li>
      )
      addChildren(child)
    } else {
      let index = (
        <li key={node.children[0].frontmatter.title}>
          <Link
            to={"/" + node.relativeDirectory}
            getProps={isActive}
          >
            {node.children[0].frontmatter.title}
          </Link>
          {/* <span>+</span> */}
        </li>
      )
      addIndex(index)
    } 
  }

  let currentParent = ""
  let currentChildren = []
  let currentIndex = []
  
  const list = (
    <React.Fragment>
      <ul className="sidenav">
        {data.allFile.edges.map(({node}, index) => {
          if (
            node.relativeDirectory !== "" &&
            (currentParent === "" ||
              currentParent === node.relativeDirectory)
          ) {
            currentParent = node.relativeDirectory
            addNodes(node);
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
            currentParent !== node.relativeDirectory &&
            currentParent !== ""
          ) {
            let res
            if (node.relativeDirectory === "") {
              res = (
                <React.Fragment>
                  {currentIndex}
                  <ul style={{ listStyle: "none" }}>
                    {currentChildren}
                  </ul>
                  <li key={node.children[0].frontmatter.title}>
                    <Link to={"/" + node.name} getProps={isActive}>
                      {node.children[0].frontmatter.title}
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
              currentParent = node.relativeDirectory
              addNodes(node)
            }
            return res
          }

          return (
            <li key={node.children[0].frontmatter.title}>
              <Link to={"/" + node.name} getProps={isActive}>
                {node.children[0].frontmatter.title}
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
