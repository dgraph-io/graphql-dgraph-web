import { connect } from "react-redux"
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import DgraphLogo from "../images/graphql-logo.png"
import { Dropdown } from "react-bootstrap"
import { GoChevronDown, GoChevronUp } from "react-icons/go"
import "../assets/style/custom.scss"

const config = require("../../config")

const changeVersion = eventKey => {
  if (eventKey !== "master") {
    window.location.assign(process.env.GATSBY_URL + eventKey)
  } else {
    window.location.assign(process.env.GATSBY_URL)
  }
}

const VersionDropdown = props => {
  const { currentVersion, dispatch } = props

  return (
    <div className="">
      <Dropdown
        onSelect={(eventKey, event) => changeVersion(eventKey)}
        size="xs"
      >
        <Dropdown.Toggle id="dropdown-basic" className="dropdown-version">
          {currentVersion}
          <GoChevronDown className="arrow-down" />
          <GoChevronUp className="arrow-up" />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {process.env.GATSBY_VERSIONS.split(",").map(version => (
            <Dropdown.Item
              key={version}
              active={version === process.env.GATSBY_CURRENT_VERSION}
              eventKey={version}
              onClick={() => {
                dispatch({ type: "SELECT_VERSION", version: version })
              }}
            >
              {version}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentVersion: state.currentVersion
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VersionDropdown)
