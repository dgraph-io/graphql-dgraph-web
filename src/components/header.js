import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Twitter from "../images/twitter.svg"
import Github from "../images/github.svg"

const config = require("../../config")

const Header = ({ siteTitle }) => {
  return (
    <div className="topbar d-flex">
        <div className="page-header">
          
          <a
            href="https://twitter.com/dgraphlabs"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto"
          >
            <img src={Twitter} alt="Twitter" className="mb-0"/>
          </a>
          <a
            target="_blank"
            href="https://github.com/dgraph-io/graphql-dgraph-web"
            rel="noopener noreferrer"
         
          >
           <img src={Github} alt="Github" className="mb-0" />
          </a>
        </div>
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
