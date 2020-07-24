import React, { useState, useContext } from "react"
import Helmet from "react-helmet"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "./layout.css"
import "./seti.css"
import SideBar from "./sidebar"
import Header from "./header"
import SideBarRight from "./sidebarright"
import { Location } from "@reach/router"
import SEO from "./seo"
import { categoryClassName } from "../utils/graphQLConstants/side-bar-category"

const config = require("../../config")

const Layout = props => {
  const [sideBarContentDropDownTitle, selectSideBarContent] = useState("")
  const [sideBarCategoryIndex, setCategory] = useState(0)
  const { categoryIndex, renderRightSideBar } = props
  const [isSideBarVisible, showSideBar] = useState(false)

  const setContentCategory = (dropDownTitle, categoryIndex) => {
    selectSideBarContent(dropDownTitle)
    setCategory(categoryIndex)
  }

  const getSideBarClass = props => {
    const { sidebarClass } = props

    switch (sidebarClass) {
      case categoryClassName.dgraphQl:
        return true

      default:
        return false
    }
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <SEO
            title={
              props.pageContext !== undefined
                ? props.pageContext.frontmatter.title
                : "Dgraph GraphQL"
            }
          />

          <Location>
            {({ location }) => {
              return (
                <Helmet>
                  <link rel="canonical" href={location.href} />
                </Helmet>
              )
            }}
          </Location>
          <div className="sidebar-container-visible">
            <SideBar
              selectSideBarContent={(nodeTitle, contentClass) => {
                setContentCategory(nodeTitle, contentClass)
              }}
              sidebarcategoryindex={sideBarCategoryIndex}
            />
          </div>
          {isSideBarVisible && (
            <div className="toggle-sidebar">
              <SideBar
                selectSideBarContent={(nodeTitle, contentClass) => {
                  setContentCategory(nodeTitle, contentClass)
                }}
                sidebarcategoryindex={sideBarCategoryIndex}
              />
            </div>
          )}
          <div className="content-wrap">
            <Header
              siteTitle={data.site.siteMetadata.title}
              isSideBarVisible={isSideBarVisible}
              showSideBar={isSideBarVisible => showSideBar(isSideBarVisible)}
            />

            <div
              className={
                getSideBarClass(props)
                  ? "landing-pg-extend-sidebar pl-lg-5 pl-md-5"
                  : renderRightSideBar
                  ? "landing-pg  pl-lg-5 pl-md-5 "
                  : "landing-pg-extend pl-lg-5 pl-md-5"
              }
            >
              {props.children}
            </div>
            {renderRightSideBar && (
              <div
                className={
                  getSideBarClass(props)
                    ? "sidebar-right-container-extended"
                    : "sidebar-right-container"
                }
              >
                {
                  <Location>
                    {({ location }) => {
                      return <SideBarRight file={location.pathname} sectionScroll={getSideBarClass(props)}/>
                    }}
                  </Location>
                }
              </div>
            )}
          </div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

const mapStateToProps = state => {
  return {
    categoryIndex: state.sideBarCategoryIndex,
    sidebarClass: state.sideBarCategoryClassName,
    renderRightSideBar: state.renderRightSideBar
  }
}

export default connect(mapStateToProps)(Layout)
