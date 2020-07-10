import React, { useState } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Accordion } from "react-bootstrap"
import VersionDropdown from "./VersionDropdown"
import SideBarContentDropdown from "./sideBarContentDropdown"
import DgraphLogo from "../images/graphql-logo.png"
import { GoChevronDown, GoChevronUp } from "react-icons/go"
import { GlobalStateContext, GlobalReducerContext } from '../context/GlobalContextProvider';


const config = require("../../config")

const SideBar = props => {
  const [showAccordion, toggleAccordion] = useState(true)
  const [toggleListItemMarker, toggleListItem] = useState('');

  const { categoryIndex } = props
  const state = React.useContext(GlobalStateContext);
  const dispatch = React.useContext(GlobalReducerContext);


  function isActive(obj) {
    return obj.isCurrent ? { className: "active" } : null
  }

  let currentChildren = []
  let currentParent
  let completeRes = []


  completeRes = config.sidebarOptions[categoryIndex].map(node => {
    currentParent = node.title
    let mainNode = (
      <li key={node.title} className="sidebar-inline font-weight-medium">
        <Link
          to={"/" + node.path.replace("index.mdx", "").replace(".mdx", "")}
          getProps={isActive}
          onClick={() => { dispatch({ type: 'HIDE_RIGHT_SIDEBAR', showSideBar: node.showSideBar }) }}
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
              onClick={() => { dispatch({ type: 'HIDE_RIGHT_SIDEBAR', showSideBar: childNode.showSideBar }) }}

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
        <Accordion
          defaultActiveKey={currentParent}
          bsPrefix={toggleListItemMarker===mainNode ? "accordion-show" : "accordion-hide"}
        >
          {mainNode}
          {currentChildren.length !== 0 && (
            <Accordion.Toggle
              as="span"
              eventKey={currentParent}
              className="accordion-toggle"
              onClick={() => {
                showAccordion ? toggleAccordion(false) : toggleAccordion(true);
                toggleAccordion(node.title);
              }}
            >
              <span className="cursor-pointer">
                <GoChevronDown className={showAccordion?`collapsible-arrow-down`:"hide"} />
                <GoChevronUp className={!showAccordion?`collapsible-arrow-up`:"hide"} />
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

  const list = (
    <React.Fragment>
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
          <ul>{completeRes}</ul>
        </div>
      </div>
    </React.Fragment>
  )

  return list
}

const mapStateToProps = (state) =>{
  return{
    categoryIndex: state.sideBarCategoryIndex
  }
}

export default connect(mapStateToProps)( SideBar);
