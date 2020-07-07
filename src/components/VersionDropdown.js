import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import DgraphLogo from "../images/graphql-logo.png"
import { Dropdown } from "react-bootstrap"
import {GoChevronDown,GoChevronUp} from 'react-icons/go';


const config = require("../../config")

const changeVersion = eventKey => {
  if (eventKey !== "master") {
    window.location.assign(process.env.GATSBY_URL + eventKey)
  } else {
    window.location.assign(process.env.GATSBY_URL)
  }
}

const VersionDropdown = ({ siteTitle }) => {
  return (
    <div className="">
      <Dropdown
        onSelect={(eventKey, event) => changeVersion(eventKey)}
        size="xs"
      >
        <Dropdown.Toggle id="dropdown-basic" className="dropdown-version">
          Version
          <GoChevronDown className="arrow-down"/>
          <GoChevronUp className="arrow-up" />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {process.env.GATSBY_VERSIONS.split(",").map(version => (
            <Dropdown.Item
              key={version}
              active={version === process.env.GATSBY_CURRENT_VERSION}
              eventKey={version}
            >
              {version}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default VersionDropdown
