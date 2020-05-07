import React, { useState } from "react"
import {  Link } from "gatsby"
import { Accordion } from "react-bootstrap"

const config = require("../../config")

const SideBar = props => {
  const [partialCurrent, setpartialCurrent] = useState([])
  function isActive(obj) {
    if (
      obj.isPartiallyCurrent === true &&
      partialCurrent.length < config.length
    ) {
      setpartialCurrent(partialCurrent => [...partialCurrent, obj.href])
    }
    return obj.isCurrent ? { className: "active" } : null
  }
  //isPartiallyCurrent href
  function addChildren(child) {
    currentChildren.push(child)
  }

  let currentChildren = []
  let currentParent
  let completeRes = []

  config.map(node => {
    currentParent = node.title
    let mainNode = (
      <li key={node.title} className="sidebar-inline">
        <Link
          to={node.path.replace("index.mdx", "/").replace(".mdx", "/")}
          getProps={isActive}
        >
          {node.title}
        </Link>
      </li>
    )
    if (node.children !== undefined) {
      node.children.map(childNode => {
        let child = (
          <li key={childNode.title}>
            <Link to={childNode.path.replace(".mdx", "")} getProps={isActive}>
              {childNode.title}
            </Link>
          </li>
        )
        addChildren(child)
      })
    }
    
    const res = (
      <React.Fragment>
        <Accordion defaultActiveKey={currentParent}>
          {mainNode}
          {currentChildren.length !== 0 && (
            <Accordion.Toggle as="span" eventKey={currentParent}>
              <span style={{ cursor: "pointer" }}> - </span>
            </Accordion.Toggle>
          )}
          {currentChildren.length !== 0 && (
            <Accordion.Collapse eventKey={currentParent}>
              <ul style={{ listStyle: "none" }}>{currentChildren}</ul>
            </Accordion.Collapse>
          )}
        </Accordion>
      </React.Fragment>
    )

    currentChildren = []
    completeRes.push(res)
  })

  const list = (
    <React.Fragment>
      <ul className="sidenav">{completeRes}</ul>
    </React.Fragment>
  )

  return list
}

export default SideBar
