import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Accordion, Button } from "react-bootstrap"
import VersionDropdown from "./VersionDropdown"
import SideBarContentDropdown from "./sideBarContentDropdown"
import DgraphLogo from "../images/graphql-logo.png"
import { GoChevronDown, GoChevronUp } from "react-icons/go"
import { getCategoryIndex } from "../helper-functions/find-current-path"
import { Location } from "@reach/router"
import BackButtonMainWebsite from "./MainWebsiteRedirect"
import { GrClose } from "react-icons/gr"
import { IconContext } from "react-icons"

const config = require("../../config")

const SideBar = props => {
  const { dispatch, toggleAccordionArray } = props

  function isActive(obj) {
    return obj.isCurrent ? { className: "active" } : null
  }

  let currentChildren = []
  let currentParent
  let completeRes = []

  completeRes = locationProp =>
    config.sidebarOptions[getCategoryIndex(dispatch, locationProp)].map(
      (node, arrayIndex) => {
        currentParent = node.title

        if (!toggleAccordionArray.length)
          config.sidebarOptions[getCategoryIndex(dispatch, locationProp)].map(
            (value, index) => {
              dispatch({
                type: "TOGGLE_ACCORDION",
                toggleListItemMarker: node.title,
                showAccordion: false,
                index: index
              })
            }
          )

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
          currentChildren = node.children.map(childNode => {
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

        // const resetToggleMarker = () => {
        //   toggleAccordion(false)
        // }
        {
          console.log("[index]", arrayIndex)
        }

        const res = (
          <React.Fragment key={currentParent}>
            <Accordion
              bsPrefix={
                !toggleAccordionArray[arrayIndex].showAccordion
                  ? "accordion-show"
                  : "accordion-hide"
              }
            >
              {mainNode}

              {currentChildren.length !== 0 && (
                <Accordion.Toggle
                  as="span"
                  eventKey={currentParent}
                  className="accordion-toggle"
                  onClick={() => {
                    dispatch({
                      type: "TOGGLE_ACCORDION",
                      toggleListItemMarker: node.title,
                      showAccordion: !toggleAccordionArray[arrayIndex]
                        .showAccordion,
                      index: arrayIndex
                    })
                  }}
                >
                  <span className="cursor-pointer">
                    <GoChevronDown className="collapsible-arrow-down" />
                    <GoChevronUp className="collapsible-arrow-up" />
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
      }
    )

  const list = (
    <React.Fragment>
      <Location>
        {locationProp => (
          <div className="sidenav">
            <div className="page-logo d-flex justify-content-between align-items-start">
              <Button
                bsPrefix="d-lg-none d-md-inline d-sm-inline d-xs-inline border-0 close-button p-0"
                onClick={() => {
                  props.showSideBar(false)
                }}
              >
                <IconContext.Provider
                  value={{ color: "#555555", size: "20px" }}
                >
                  <GrClose />
                </IconContext.Provider>
              </Button>
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

              <div className="backbutton-container-mobile">
                <BackButtonMainWebsite />
              </div>
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
    currentExpandedAccordion: state.currentExpandedAccordion,
    toggleAccordionArray: state.toggleAccordionArray
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(SideBar)
