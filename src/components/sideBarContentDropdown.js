import React from "react"
import { Dropdown , Container , Row,Col} from "react-bootstrap"
import { Images } from "../images"
import GlobalNavMenu from "./GlobalNavMenu"
import { connect } from "react-redux"

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
            <Container className="initial-menu-container">
              <Row className="list-item-menu-header">
                <Col>GraphQL Docs Sections</Col>
              </Row>
              <GlobalNavMenu side />
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
