import React from "react"
import { Link } from "gatsby"
import { Accordion } from "react-bootstrap"
import VersionDropdown from "./VersionDropdown"
import DgraphLogo from "../images/graphql-logo.png"

const config = require("../../config")

const SideBar = props => {

  const {currentVersion} = props;

  function isActive(obj) {
    return obj.isCurrent ? { className: "active" } : null
  }

  let currentChildren = []
  let currentParent
  let completeRes = []

  completeRes = config.sidebarOptions.map(node => {
    currentParent = node.title
    let mainNode = (
      <li key={node.title} className="sidebar-inline font-weight-medium">
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
      <div className="sidenav">
      <div className="page-logo">
        <Link to="/" className="img-logo header-link">
          <img src={DgraphLogo} alt="Dgraph logo" />
        </Link>
      </div>
      <VersionDropdown />
      <div className={"sidebar-wrap-extended"}>
        <ul>{completeRes}</ul>
      </div>
      </div>
    </React.Fragment>
  )

  return list
}

export default  SideBar
