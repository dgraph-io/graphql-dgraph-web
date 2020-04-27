import React from 'react';
import {Badge}  from 'react-bootstrap'
export default (props) => {
  return (
    <div style={{paddingBottom: 20}}>
      <strong>Frontend:</strong>
      {props.badges.map((badge, index) =>
        <a
          href={props.badgesUrl[index]}
          style={{
            textDecoration: 'none',
          }}
        >
          <Badge variant="primary" key={badge} style={{marginRight: 5}}>{badge}</Badge>
        </a>
      )}
    </div>
  );
};