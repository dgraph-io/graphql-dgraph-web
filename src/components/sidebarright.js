import React from "react"
import { Accordion } from "react-bootstrap"

const config = require("../../config")

const SideBarRight = props => {
  function isActive(obj) {
    return obj.isCurrent ? { className: "active" } : null
  }

  let currentChildren = []
  let currentParent
  let completeRes = []
  let list

  const opts = config.sidebarOptions.filter(function (sidebar) {
    if (
      "/" + sidebar.path.replace("index.mdx", "").replace(".mdx", "") ===
        props.file ||
      "/" + sidebar.path.replace("index.mdx", "").replace(".mdx", "") + "/" ===
        props.file
    ) {
      if (sidebar.subOptions === undefined) {
        return
      } else {
        return true
      }
    } else {
      if (sidebar.children !== undefined) {
        sidebar.children.map(child => {
          if (
            child.path.replace("index.mdx", "").replace(".mdx", "") ===
              props.file ||
            "/" +
              child.path.replace("index.mdx", "").replace(".mdx", "") +
              "/" ===
              props.file
          ) {
            if (child.subOptions === undefined) {
              return
            } else {
              return sidebar
            }
          }
        })
      } else {
        return
      }
    }
  })

  if (opts.length !== 0) {
    completeRes = opts[0].subOptions.map(node => {
      currentParent = node.name
      let mainNode = (
        <li key={node.name} className="sidebar-inline">
          <a href={"#" + node.name}>{node.name}</a>
        </li>
      )
      if (node.children !== undefined) {
        currentChildren = node.children.map(childNode => {
          let child = (
            <li key={childNode.name}>
              <a href={"#" + childNode.name}>{childNode.name}</a>
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
  }
  
  list = (
    <React.Fragment>
      <ul className="sidenav">{completeRes}</ul>
    </React.Fragment>
  )

  return list
}

export default SideBarRight
