import React from "react"
import { connect } from "react-redux"
import { Row, Col, Container } from "react-bootstrap"
import { Link } from "gatsby"
import { sideBarContentClasses } from "../utils/graphQLConstants/side-bar-category"

const config = require("../../config")

function GlobalNavMenu(props) {
  const { dispatch } = props

  const Stage = props => {
    return (
      <div className="stage-container">
        <div className="stage-badge lighter-button">
          <span className="gradient-text">{props.stage}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="sidebar-menu-section-container">
      <Container bsPrefix="sidebar-menu-bootstrap-container">
        <Row className="section-content-row">
          <Col>
            {sideBarContentClasses[0].map((leftContent, index) => {
              return (
                <Row bsPrefix="list-item-row" key={index}>
                  {/* <Row> */}
                  <Col
                    md={2}
                    lg={2}
                    sm={2}
                    xs={2}
                    className="sidebar-container-icon-container"
                  >
                    <div className="section-icon">
                      <img src={leftContent.icon} alt="icon" />
                    </div>
                  </Col>

                  <Col
                    md={10}
                    lg={10}
                    sm={10}
                    xs={10}
                    className="sidebar-container-list-item"
                  >
                    <div className="list-item-title">
                      <Link
                        to={`/${config.sidebarOptions[index][0].path
                          .replace("index.mdx", "")
                          .replace(".mdx", "")}`}
                        onClick={() => {
                          dispatch({
                            type: "SELECT_SIDEBAR_CONTENT_CATEGORY",
                            categoryName: leftContent.title,
                            categoryIndex: index
                          })
                          dispatch({
                            type: "HIDE_RIGHT_SIDEBAR",
                            showSideBar: leftContent.showSideBar
                          })
                        }}
                      >
                        <span className="list-item-title-text">
                          {leftContent.title}
                        </span>
                        {leftContent.stage ? <Stage stage="BETA" /> : null}
                      </Link>
                    </div>
                    <div className="list-item-subtitle">
                      {leftContent.subTitle}
                    </div>
                  </Col>
                  {/* </Row> */}
                </Row>
              )
            })}
          </Col>
          <Col>
            {sideBarContentClasses[1].map((rightContent, index) => {
              return (
                <Row bsPrefix="list-item-row" key={index}>
                  {/* <Row> */}
                  <Col
                    md={2}
                    lg={2}
                    sm={2}
                    xs={2}
                    className="sidebar-container-icon-container"
                  >
                    <div className="section-icon">
                      <img src={rightContent.icon} alt="icon" />
                    </div>
                  </Col>
                  <Col
                    md={10}
                    lg={10}
                    sm={10}
                    xs={10}
                    className="sidebar-container-list-item"
                  >
                    <div className="list-item-title">
                      <Link
                        to={`/${config.sidebarOptions[index + 3][0].path
                          .replace("index.mdx", "")
                          .replace(".mdx", "")}`}
                        onClick={() => {
                          dispatch({type:'CLEAR_TOGGLE_ARRAY'})
                          dispatch({
                            type: "SELECT_SIDEBAR_CONTENT_CATEGORY",
                            categoryName: rightContent.title,
                            categoryIndex: index + 3
                          })
                          dispatch({
                            type: "HIDE_RIGHT_SIDEBAR",
                            showSideBar: rightContent.showSideBar
                          })
                        }}
                      >
                        {rightContent.title}
                      </Link>
                    </div>
                    <div className="list-item-subtitle">
                      {rightContent.subTitle}
                    </div>
                  </Col>
                  {/* </Row> */}
                </Row>
              )
            })}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(null, mapDispatchToProps)(GlobalNavMenu)
