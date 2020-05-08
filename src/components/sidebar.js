import React from "react"
import {  Link } from "gatsby"
import { Accordion } from "react-bootstrap"

const config = require("../../config")

const SideBar = props => {
  function isActive(obj) {
    return obj.isCurrent ? { className: "active" } : null
  }
  
  let currentChildren = []
  let currentParent
  let completeRes = []

  completeRes = config.map(node => {
    currentParent = node.title
    let mainNode = (
      <li key={node.title} className="sidebar-inline">
        <Link
          to={"/" + node.path.replace("index.mdx", "").replace(".mdx", "")}
          getProps={isActive}
        >
          {node.title}
        </Link>
      </li>
    )
    if (node.children !== undefined) {
      currentChildren = node.children.map(childNode => {
        let child = (
          <li key={childNode.title}>
            <Link
              to={"/" + childNode.path.replace(".mdx", "")}
              getProps={isActive}
            >
              {childNode.title}
            </Link>
          </li>
        )
        return child
      })
    }

    const res = (
      <React.Fragment key={currentParent}>
        <Accordion defaultActiveKey={currentParent}>
          {mainNode}
          {currentChildren.length !== 0 && (
            <Accordion.Toggle as="span" eventKey={currentParent}>
              <span className="cursor-pointer"> - </span>
            </Accordion.Toggle>
          )}
          {currentChildren.length !== 0 && (
            <Accordion.Collapse eventKey={currentParent}>
              <ul className="list-no-style">{currentChildren}</ul>
            </Accordion.Collapse>
          )}
        </Accordion>
      </React.Fragment>
    )

    currentChildren = []
    return res
  })

  const list = (
    <React.Fragment>
      <ul className="sidenav">{completeRes}</ul>
    </React.Fragment>
  )

  return list
}

export default SideBar
