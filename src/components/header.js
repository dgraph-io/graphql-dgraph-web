import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import DgraphLogo from "../images/graphql-logo.png";
import { FaTwitter, FaGithub, FaSlack, FaArrowRight } from "react-icons/fa";

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: "1.45rem",
    }}
  >
     <div className="page-header">
     <div className="page-logo">
        <Link
          to="/"
          style={{
            display: 'block',
            margin: '0 auto',
            textDecoration: 'none',
          }}
          className="img-logo"
        >
          <img src={DgraphLogo} alt="Dgraph logo"/>
        </Link>
      </div> 
      <div className="page-cta">
        <a
          target="_blank"
          className="btn btn-dgraph"
          rel="noopener noreferrer"
          href="https://app.thegaas.com/"
        >
          <span>Sign up</span>
          <FaArrowRight style={{
            marginLeft: '16px',
          }}/>
        </a>
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
