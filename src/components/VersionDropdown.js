import React from "react"
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

  const currentVersion = 'v20.03.1'

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
