import React from "react"
import {connect} from 'react-redux';
import { Link } from "gatsby"
import { Dropdown, Row, Col, Container } from "react-bootstrap"
import { sideBarContentClasses } from "../utils/graphQLConstants/side-bar-category"
import {Images} from '../images';


const config = require("../../config")

 function SideBarContentDropdown(props) {

  const {dispatch , categoryName} = props;

  const Stage = (props)=>{
    return (
      <div className="stage-container">
        <div className="stage-badge lighter-button">
          <span className="gradient-text">{props.stage}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="sidebar-content-dropdown-container">
      <div className="">
        <Dropdown size="xs">
          <Dropdown.Toggle id="dropdown-basic" bsPrefix="lighter-button">
            <div className="gradient-text-toggle-button">
              <span className="gradient-text">
                {categoryName}
              </span>
             <img src={Images.dropdown} alt="dropdown" />
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu bsPrefix="sidebar-container-dropdown-menu">
            <Container>
              <Row className="list-item-menu-header">
                <Col>GraphQL Docs Sections</Col>
              </Row>
              <Container bsPrefix="sidebar-menu-bootstrap-container">
                <Row className="section-content-row">
                  <Col>
                    {sideBarContentClasses[0].map((leftContent, index) => {
                      return (
                        <Row bsPrefix="list-item-row" key={index}>
                          {/* <Row> */}
                            <Col md={2} lg={2} sm={3}>
                            <div className="section-icon">
                            <img src={leftContent.icon} alt="icon" />
                            </div>
                              
                            </Col>

                            <Col md={10} lg={11} sm={9}>
                              <div
                                className="list-item-title"
                              >
                                <Link
                                  to={`/${config.sidebarOptions[
                                    index
                                  ][0].path.replace("index.mdx", "").replace(".mdx","")}`}
                                  onClick={() => {
                                    dispatch({
                                      type: "SELECT_SIDEBAR_CONTENT_CATEGORY",
                                      categoryName: leftContent.title,
                                      categoryIndex: index
                                    })
                                    dispatch({type:'HIDE_RIGHT_SIDEBAR' , showSideBar:leftContent.showSideBar})
                                  }}
                                >
                                  <span className="list-item-title-text">{leftContent.title}</span>{leftContent.stage?<Stage stage='BETA' />:null}
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
                            <Col md={2} lg={2} sm={3}>
                            <div className="section-icon">
                            <img src={rightContent.icon} alt="icon" />
                            </div>
                              
                            </Col>
                            <Col md={10} lg={11} sm={9}>
                              <div
                                className="list-item-title"
                              >
                                <Link
                                  to={`/${config.sidebarOptions[
                                    index+3
                                  ][0].path.replace("index.mdx", "").replace(".mdx","")}`}

                                onClick={() => {
                                  dispatch({
                                    type: "SELECT_SIDEBAR_CONTENT_CATEGORY",
                                    categoryName: rightContent.title,
                                    categoryIndex: index+3
                                  })
                                  dispatch({type:'HIDE_RIGHT_SIDEBAR' , showSideBar:rightContent.showSideBar})
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
            </Container>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) =>{
  return{
    dispatch
  }
}

const mapStateToProps = (state)=>{
  return{
    categoryName: state.sideBarCategoryClassName
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(SideBarContentDropdown);