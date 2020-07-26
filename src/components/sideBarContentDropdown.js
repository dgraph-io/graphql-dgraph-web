import React from "react"
import { Dropdown, Container, Row, Col } from "react-bootstrap"
import { Images } from "../images"
import GlobalNavMenu from "./GlobalNavMenu"
import { connect } from "react-redux"
import Twitter from "../images/twitter.svg"
import Github from "../images/github.svg"

function SideBarContentDropdown(props) {
  const { categoryName } = props

  return (
    <div className="sidebar-content-dropdown-container">
      <div className="">
        <Dropdown size="xs">
          <Dropdown.Toggle id="dropdown-basic" bsPrefix="lighter-button">
            <div className="gradient-text-toggle-button">
              <span className="gradient-text">{categoryName}</span>
              <img src={Images.dropdown} alt="dropdown" />
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu bsPrefix="sidebar-container-dropdown-menu">
            <Container className="pad-lg-bottom-0 menu-container">
              <Container
                className="initial-menu-container d-sm-flex flex-column justify-content-start"
                md={3}
              >
                <Row className="list-item-menu-header">
                  <Col>GraphQL Docs Sections</Col>
                </Row>
                <GlobalNavMenu side />
              </Container>
              <Container md={1} className="d-lg-none d-md-block p-0">
                <Row className="bottom-icon-container">
                  <div className="icon-container d-inline-block">
                    <a
                      href="https://twitter.com/dgraphlabs"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ paddingLeft: "24px" }}
                    >
                      <img src={Twitter} alt="Twitter" className="mb-0" />
                    </a>
                  </div>
                  <div className="icon-container d-inline-block">
                    <a
                      target="_blank"
                      href="https://github.com/dgraph-io/graphql-dgraph-web"
                      rel="noopener noreferrer"
                      style={{ paddingRight: "0" }}
                    >
                      <img src={Github} alt="Github" className="mb-0" />
                    </a>
                  </div>
                </Row>
              </Container>
            </Container>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    categoryName: state.sideBarCategoryClassName
  }
}

export default connect(mapStateToProps)(SideBarContentDropdown)
