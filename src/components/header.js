import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Twitter from "../images/twitter.svg"
import Github from "../images/github.svg"
import { Button } from "react-bootstrap"
import { MdChevronLeft } from "react-icons/md"
import { IconContext } from "react-icons"
import DgraphLogo from "../images/graphql-logo.png"

const config = require("../../config")

const BackIcon = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#B7B7B7" }}>
        <MdChevronLeft viewBox="0 0 12 20" />
      </IconContext.Provider>
      <MdChevronLeft viewBox="7 0 20 20" />
    </>
  )
}

const BackButtonMainWebsite = () => {
  return (
    <div className="back-button-main-website">
      <Button
        as="a"
        href="https://dgraph.io/"
        bsPrefix="navigate-main-website-button ml-auto"
      >
        <BackIcon />
        Back to Main Website
      </Button>
    </div>
  )
}

const Header = ({ siteTitle }) => {
  return (
    <div className="topbar d-flex justify-content-between">
      <div className="logo-container-tablet">
        <div className="page-logo">
          <Link to="/" className="img-logo header-link">
            <img src={DgraphLogo} alt="Dgraph logo" />
          </Link>
        </div>
      </div>
      <div className="page-header justify-content-end">
        <BackButtonMainWebsite />
        <div className="github-twitter-icon-container">
          <a
            href="https://twitter.com/dgraphlabs"
            target="_blank"
            rel="noopener noreferrer"
            style={{ paddingLeft: "24px" }}
          >
            <img src={Twitter} alt="Twitter" className="mb-0" />
          </a>
          <a
            target="_blank"
            href="https://github.com/dgraph-io/graphql-dgraph-web"
            rel="noopener noreferrer"
            style={{ paddingRight: "0" }}
          >
            <img src={Github} alt="Github" className="mb-0" />
          </a>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ""
}

export default Header
