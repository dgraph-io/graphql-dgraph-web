import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import DgraphLogo from "../images/graphql-logo.png";

const Header = ({ siteTitle }) => (
  <div className="header-spacing">
     <div className="page-header">
     <div className="page-logo">
        <Link
          to="/"
          className="img-logo header-link"
        >
          <img src={DgraphLogo} alt="Dgraph logo"/>
        </Link>
      </div> 
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: "",
};

export default Header;
