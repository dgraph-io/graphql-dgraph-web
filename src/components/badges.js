import React from "react"
import { Badge } from "react-bootstrap"
export default props => {
  return (
    <div className="badge-title">
      <strong>Frontend:</strong>
      {props.badges.map((badge, index) => (
        <Badge key={badge} variant="primary" className="badge-spacing">
          {badge}
        </Badge>
      ))}
    </div>
  )
}
