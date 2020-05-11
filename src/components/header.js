import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import DgraphLogo from "../images/graphql-logo.png"
import { Dropdown } from "react-bootstrap"

const config = require("../../config")

const changeVersion = eventKey => {
  if (eventKey !== "master") {
    window.location.assign(config.URL + eventKey)
  } else {
    window.location.assign(config.URL)
  }
}

const Header = ({ siteTitle }) => {
  return (
    <div className="header-spacing">
      <div className="page-header">
        <div className="page-logo">
          <Link to="/" className="img-logo header-link">
            <img src={DgraphLogo} alt="Dgraph logo" />
          </Link>
        </div>
      </div>
      <Dropdown
        onSelect={(eventKey, event) => changeVersion(eventKey)}
        size="xs"
      >
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Version
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {config.versions.map(version => (
            <Dropdown.Item
              key={version}
              active={version === config.currentVersion}
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

export default Header
