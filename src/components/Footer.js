import React from "react";
import { FaTwitter, FaGithub } from "react-icons/fa";

export default (props) => {
  return (
    <div
      href="https://dgraph.io/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textAlign: "center" }}
    >
      <a
        target="_blank"
        className="btn btn-secondary btn-sm"
        rel="noopener noreferrer"
        style={{ marginRight: 5 }}
        href={`${props.repoURL}`}
        size="sm"
        variant="light"
      >
        <FaGithub />
        <span style={{ paddingLeft: 5 }}>Source</span>
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${props.twitterShareText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-sm"
        style={{ backgroundColor: "#00acee" }}
      >
        <FaTwitter style={{ color: "white" }} />
        <span style={{ paddingLeft: 5 }}>Tweet</span>
      </a>
    </div>
  );
};
