import React from 'react';

const Back = props => (
  <div className="d-flex justify-content-end align-items-center">
    <a
      href="https://dgraph.io/"
      class="d-flex align-items-center "
    >
      <img
        src="https://dgraph.io/assets/images/back-arrow.svg"
        alt="back"
        class="mr-2 mb-0"
      />
      <p class="m-0 text-dark" style={{fontWeight:500}}>Back to Main Website</p>
    </a>
  </div>
);

export default Back;
