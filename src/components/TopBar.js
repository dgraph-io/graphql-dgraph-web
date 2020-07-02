import React from 'react';
import Twitter from "../images/twitter.svg"
import Github from "../images/github.svg"



export default (props) => {
    return (
  <div className="topbar d-flex justify-content-end align-items-center" style={{height:'56px'}}>
    <a
          href="https://twitter.com/dgraphlabs"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-3"
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
 )
};
