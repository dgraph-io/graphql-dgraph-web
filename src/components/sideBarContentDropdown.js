import React, { useState, useContext } from "react"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"
import { Dropdown, Row, Col, Container } from "react-bootstrap"
import { sideBarContentClasses } from "../utils/graphQLConstants/sideBarContents"
import { location } from "@reach/router"
import {
  GlobalStateContext,
  GlobalReducerContext
} from "../context/GlobalContextProvider"

const config = require("../../config")

export default function SideBarContentDropdown(props) {
  const { sideBarCategoryIndex } = props
  const locationParam = useLocation()
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalReducerContext)

  return (
    <div className="sidebar-content-dropdown-container">
      <div className="">
        <Dropdown size="xs">
          <Dropdown.Toggle id="dropdown-basic" bsPrefix="lighter-button">
            <div className="gradient-text-toggle-button">
              <span className="gradient-text">
                {/* {getURL() === ""
                  ? "Dgraph GraphQL"
                  : `${props.sideBarContentDropDownTitle}`} */}
                {state.sideBarCategoryClassName}
              </span>
              {/* <BsLayoutSidebar
                className="layout-icon"
                strokeWidth="1px"
                fill="pink"
                stroke="linearGradient(135deg, #ff1800 20px, #ff009b)"
              /> */}
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu bsPrefix="sidebar-container-dropdown-menu">
            <Container>
              <Row className="list-item-menu-header">
                <Col>GraphQL Docs Sections</Col>
              </Row>
              <Container bsPrefix="sidebar-menu-bootstrap-container">
                <Row>
                  <Col>
                    {sideBarContentClasses[0].map((leftContent, index) => {
                      return (
                        <Row bsPrefix="list-item-row" key={index}>
                          <Row>
                            <Col xs={2}>
                              <img src={leftContent.icon} alt="icon" />
                            </Col>

                            <Col>
                              <div
                                className="list-item-title"
                              >
                                <Link
                                  to={`/${config.sidebarOptions[
                                    index
                                  ][0].path.replace("index.mdx", "")}`}
                                  onClick={() => {
                                    dispatch({
                                      type: "SELECT_SIDEBAR_CONTENT_CATEGORY",
                                      categoryName: leftContent.title,
                                      categoryIndex: index
                                    })
                                  }}
                                >
                                  <span>{leftContent.title}</span>
                                </Link>
                              </div>
                              <div className="list-item-subtitle">
                                {leftContent.subTitle}
                              </div>
                            </Col>
                          </Row>
                        </Row>
                      )
                    })}
                  </Col>
                  <Col>
                    {sideBarContentClasses[1].map((rightContent, index) => {
                      return (
                        <Row bsPrefix="list-item-row" key={index}>
                          <Row>
                            <Col xs={2}>
                              <img src={rightContent.icon} alt="icon" />
                            </Col>
                            <Col>
                              <div
                                className="list-item-title"
                              >
                                <Link
                                  to={`/${config.sidebarOptions[
                                    index+3
                                  ][0].path.replace("index.mdx", "")}`}

                                onClick={() => {
                                  dispatch({
                                    type: "SELECT_SIDEBAR_CONTENT_CATEGORY",
                                    categoryName: rightContent.title,
                                    categoryIndex: index+3
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
                          </Row>
                        </Row>
                      )
                    })}
                  </Col>
                </Row>
              </Container>
            </Container>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}
