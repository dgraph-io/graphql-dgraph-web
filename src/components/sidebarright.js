import React, { useState, useContext } from "react"
import { Accordion } from "react-bootstrap"
import { GoChevronDown, GoChevronUp } from "react-icons/go"
import { GlobalStateContext } from "../context/GlobalContextProvider"
import { connect } from "react-redux"

const config = require("../../config")

const SideBarRight = props => {
  const [selectedLink, getSelectedLink] = useState("")
  const [accordionShow, toggleAccordion] = useState(false)
  const { categoryIndex, dispatch } = props

  let currentChildren = []
  let currentParent
  let completeRes = []
  let optsChildren = []
  let list

  let opts = config.sidebarOptions[categoryIndex].filter(function(sidebar) {
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
        if (optsChildren == 0) {
          optsChildren = sidebar.children.filter(child => {
            if (
              child.path.replace("index.mdx", "").replace(".mdx", "") ===
                props.file ||
              "/" +
                child.path.replace("index.mdx", "").replace(".mdx", "") +
                "/" ===
                props.file ||
              "/" + child.path.replace("index.mdx", "").replace(".mdx", "") ===
                props.file
            ) {
              if (child.subOptions === undefined) {
              } else {
                return true
              }
            }
          })
        }
      } else {
        return
      }
    }
  })

  if (optsChildren.length !== 0) opts = optsChildren

  if (opts.length !== 0) {
    completeRes = opts[0].subOptions.map((node, index) => {
      currentParent = node.name
      let mainNode = (
        <li key={node.name} className="sidebar-inline font-weight-medium">
          {!props.sectionScroll && (
            <a
              href={"#" + node.name}
              className={
                selectedLink === node.name ? "pink-link-active" : "pink-link"
              }
              onClick={() => {
                getSelectedLink(node.name)
              }}
            >
              {node.name}
            </a>
          )}
          {props.sectionScroll && (
            <a
              href={"#" + node.scrollTo}
              className={
                selectedLink === ""
                  ? index === 0
                    ? "grey-link-active"
                    : "grey-link"
                  : selectedLink === node.name
                  ? "grey-link-active"
                  : "grey-link"
              }
              onClick={() => {
                getSelectedLink(node.name)
              }}
            >
              {node.name}
            </a>
          )}
        </li>
      )
      if (node.children !== undefined) {
        currentChildren = node.children.map(childNode => {
          let child = (
            <li key={childNode.name} className="sidebar-inline-block">
              <a
                href={"#" + childNode.name}
                className={
                  selectedLink === childNode.name
                    ? "pink-link-active"
                    : "pink-link accordion-child-link-light"
                }
                onClick={() => {
                  getSelectedLink(childNode.name)
                }}
              >
                {childNode.name}
              </a>
            </li>
          )
          return child
        })
      }

      const getAccordionStatus = () => {
        toggleAccordion(!accordionShow)
      }

      const res = (
        <React.Fragment key={currentParent}>
          <Accordion>
            {mainNode}
            {currentChildren.length !== 0 && (
              <Accordion.Toggle
                as="span"
                eventKey={currentParent}
                onClick={() => {
                  getAccordionStatus()
                }}
              >
                <span className="cursor-pointer">
                  {" "}
                  <GoChevronDown
                    className={accordionShow ? "arrow-down" : "hide"}
                  />
                  <GoChevronUp
                    className={!accordionShow ? "arrow-up" : "hide"}
                  />{" "}
                </span>
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
    <div className="sidebar-component">
      <ul className="sidenav-right">{completeRes}</ul>
    </div>
  )

  return list
}

const mapStateToProps = state => {
  return {
    categoryIndex: state.sideBarCategoryIndex
  }
}
export default connect(mapStateToProps)(SideBarRight)
