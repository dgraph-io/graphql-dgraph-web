import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { FaTwitter, FaGithub, FaSlack } from "react-icons/fa";

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: "linear-gradient(135deg, #ff1800, #ff009b)",
      marginBottom: "1.45rem",
    }}
  >
    <div
      style={{
        margin: "0 auto",
        // maxWidth: 960,
        padding: "1.45rem 1.0875rem",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          {siteTitle}
        </Link>
        <span style={{ float: "right" }}>
          <a
            target="_blank"
            className="btn btn-secondary btn-sm"
            rel="noopener noreferrer"
            href="https://slack.dgraph.io/"
            size="sm"
            style={{ backgroundColor: "#3F0E40", marginRight: 5 }}
          >
            <FaSlack />
          </a>
          <a
            href="https://twitter.com/dgraphlabs"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm"
            style={{ backgroundColor: "#00acee", marginRight: 5 }}
          >
            <FaTwitter style={{ color: "white" }} />
          </a>
          <a
            target="_blank"
            className="btn btn-secondary btn-sm"
            href="https://github.com/dgraph-io/dgraph"
            rel="noopener noreferrer"
            size="sm"
            variant="light"
          >
            <FaGithub />
          </a>
        </span>
      </h1>
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
