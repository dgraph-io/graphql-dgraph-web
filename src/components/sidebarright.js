import React from "react"
import { Accordion } from "react-bootstrap"

const config = require("../../config")

const SideBarRight = props => {

  let currentChildren = []
  let currentParent
  let completeRes = []
  let optsChildren = []
  let list

  let opts = config.sidebarOptions.filter(function (sidebar) {
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
        optsChildren = sidebar.children.filter(child => {
          if (
            (child.path.replace("index.mdx", "").replace(".mdx", "") ===
              props.file) || (
            "/" +
              child.path.replace("index.mdx", "").replace(".mdx", "") +
              "/" ===
              props.file) || (
            "/" +
              child.path.replace("index.mdx", "").replace(".mdx", "")
              ===
              props.file)
          ) {
            if (child.subOptions === undefined) {
            } else {
              return true
            }
          } 
        })
      } else {
        return
      }
    }
  })

  if (optsChildren.length !== 0)
    opts = optsChildren
  
  if (opts.length !== 0) {
    completeRes = opts[0].subOptions.map(node => {
      currentParent = node.name
      let mainNode = (
        <li key={node.name} className="sidebar-inline">
          <a href={"#" + node.name} className={document.URL===`${process.env.GATSBY_URL}schema#${node.name}`?"pink-link-active":"pink-link"}>
            {node.name}
          </a>
        </li>
      )
      if (node.children !== undefined) {
        currentChildren = node.children.map(childNode => {
          let child = (
            <li key={childNode.name}>
              <a href={"#" + childNode.name} className={document.URL===`${process.env.GATSBY_URL}schema#${childNode.name}`?"pink-link-active":"pink-link"}>
                {childNode.name}
              </a>
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
      <ul className="sidenav-right ">{completeRes}</ul>
    </React.Fragment>
  )

  return list
}

export default SideBarRight
