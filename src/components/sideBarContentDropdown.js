import React from "react"
import { Dropdown, Row, Col, Container } from "react-bootstrap"
import { sideBarContentClasses } from "../utils/graphQLConstants/sideBarContents"

export default function SideBarContentDropdown() {
    return (
        <div className="sidebar-content-dropdown-container">
            <div className="">
                <Dropdown size="xs">
                    <Dropdown.Toggle id="dropdown-basic" bsPrefix="lighter-button">
                        <span className="gradient-text">Dgraph GraphQL</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu bsPrefix="sidebar-container-dropdown-menu">
                        <Container>
                            <Row className="list-item-menu-header">
                                <Col>GraphQL Docs Sections</Col>
                            </Row>
                            <Container bsPrefix="sidebar-menu-bootstrap-container">
                                <Row>
                                    <Col>
                                        {
                                            sideBarContentClasses[0].map((leftContent, index) => {
                                                return (<Row bsPrefix="list-item-row">
                                                    <Row><Col xs={2}><img src={leftContent.icon} alt="icon" /></Col>

                                                        <Col>
                                                            <div className="list-item-title"><a href='#'>{leftContent.title}</a></div>
                                                            <div className="list-item-subtitle">{leftContent.subTitle}</div>
                                                        </Col>
                                                    </Row>

                                                </Row>);
                                            })
                                        }
                                    </Col>
                                    <Col>
                                        {
                                            sideBarContentClasses[1].map((rightContent, index) => {
                                                return (<Row bsPrefix="list-item-row">
                                                    <Row><Col xs={2}><img src={rightContent.icon} alt="icon" /></Col>
                                                        <Col>
                                                            <div className="list-item-title"><a href="#">{rightContent.title}</a></div>
                                                            <div className="list-item-subtitle">{rightContent.subTitle}</div>
                                                        </Col>
                                                    </Row>

                                                </Row>);
                                            })
                                        }
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
