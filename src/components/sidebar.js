import React, { useState } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Accordion } from "react-bootstrap"
import VersionDropdown from "./VersionDropdown"
import SideBarContentDropdown from "./sideBarContentDropdown"
import DgraphLogo from "../images/graphql-logo.png"
import { GoChevronDown, GoChevronUp } from "react-icons/go"
import { getCategoryIndex } from "../helperFunctions/findCurrentPath"
import { Location } from "@reach/router"

const config = require("../../config")

const SideBar = props => {
  const [showAccordion, toggleAccordion] = useState(false)
  const [toggleListItemMarker, toggleListItem] = useState("")

  const { dispatch, currentExpandedAccordion } = props

  function isActive(obj) {
    return obj.isCurrent ? { className: "active" } : null
  }

  let currentChildren = []
  let currentParent
  let completeRes = []

  completeRes = locationProp =>
    config.sidebarOptions[getCategoryIndex(dispatch, locationProp)].map(
      (node,index) => {
        currentParent = node.title
        let mainNode = (
          <li key={node.title} className="sidebar-inline font-weight-medium">
            <Link
              to={"/" + node.path.replace("index.mdx", "").replace(".mdx", "")}
              getProps={isActive}
              onClick={() => {
                dispatch({
                  type: "HIDE_RIGHT_SIDEBAR",
                  showSideBar: node.showSideBar
                })
              }}
            >
              {node.title}
            </Link>
          </li>
        )
        if (node.children !== undefined) {
          currentChildren = node.children.map((childNode) => {
            let child = (
              <li key={childNode.title} className="font-weight-medium">
                <Link
                  to={"/" + childNode.path.replace(".mdx", "")}
                  getProps={isActive}
                  onClick={() => {
                    dispatch({
                      type: "HIDE_RIGHT_SIDEBAR",
                      showSideBar: childNode.showSideBar
                    })
                  }}
                >
                  {childNode.title}
                </Link>
              </li>
            )
            return child
          })
        }

        const resetToggleMarker = () => {
          toggleAccordion(false)
          toggleListItem("")
        }

        const res = (
          <React.Fragment key={currentParent}>
            <Accordion
              bsPrefix={
                toggleListItemMarker === node.title && showAccordion
                  ? "accordion-hide"
                  : "accordion-show"
              }
            >
              {mainNode}

              {currentChildren.length !== 0 && (
                <Accordion.Toggle
                  as="span"
                  eventKey={currentParent}
                  className="accordion-toggle"
                  onClick={() => {
                    showAccordion ? resetToggleMarker() : toggleAccordion(true)
                    toggleListItem(node.title)
                  }}
                >
                  <span className="cursor-pointer">
                    <GoChevronDown className="collapsible-arrow-down" />
                    <GoChevronUp className="collapsible-arrow-up" />
                  </span>
                </Accordion.Toggle>
              )}
              {currentChildren.length !== 0 && (
                <Accordion.Collapse
                  eventKey={currentParent}
                >
                  <ul className="list-no-style">{currentChildren}</ul>
                </Accordion.Collapse>
              )}
            </Accordion>
          </React.Fragment>
        )

        currentChildren = []
        return res
      }
    )

  const list = (
    <React.Fragment>
      <Location>
        {locationProp => (
          <div className="sidenav">
            <div className="page-logo">
              <Link to="/" className="img-logo header-link">
                <img src={DgraphLogo} alt="Dgraph logo" />
              </Link>
            </div>
            <VersionDropdown />
            <SideBarContentDropdown
              selectSideBarContentBody={(dropdownTitle, categoryIndex) => {
                props.selectSideBarContent(dropdownTitle, categoryIndex)
              }}
            />
            <div className="sidebar-wrap">
              <ul>{completeRes(locationProp)}</ul>
            </div>
          </div>
        )}
      </Location>
    </React.Fragment>
  )

  return list
}

const mapDispatchToProp = dispatch => {
  return {
    dispatch
  }
}

const mapStateToProps = state => {
  return {
    currentExpandedAccordion: state.currentExpandedAccordion
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(SideBar)
