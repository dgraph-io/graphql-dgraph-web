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
import SEO from "../components/seo"
import {
  GlobalStateContext,
  GlobalReducerContext
} from "../context/GlobalContextProvider"
import InPageCurrentPageSideBar from "./inPageCurrentPageSideBar"

const config = require("../../config")

const Layout = props => {
  const [sideBarContentDropDownTitle, selectSideBarContent] = useState("")
  const [sideBarCategoryIndex, setCategory] = useState(0)
  const { categoryIndex, sidebarClass, renderRightSideBar } = props

  const state = useContext(GlobalStateContext)

  const setContentCategory = (dropDownTitle, categoryIndex) => {
    selectSideBarContent(dropDownTitle)
    setCategory(categoryIndex)
   
  }
  console.log(
    "[ index,title ,render sidebar]",
    categoryIndex,
    sidebarClass,
    renderRightSideBar
  )
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

          <SideBar
            selectSideBarContent={(nodeTitle, contentClass) => {
              setContentCategory(nodeTitle, contentClass)
            }}
            sidebarcategoryindex={sideBarCategoryIndex}
          />

          <div className="content-wrap">
            <Header siteTitle={data.site.siteMetadata.title} />

            <div
              className={
                state.renderRightSideBar
                  ? "landing-pg  pl-5"
                  : "landing-pg-extend pl-5"
              }
            >
              {props.children}
            </div>
            {state.renderRightSideBar && (
              <div className="sidebar-right-container">
                {config.sidebarOptions[state.sideBarCategoryIndex] && (
                  <Location>
                    {({ location }) => {
                      return <SideBarRight file={location.pathname} />
                    }}
                  </Location>
                )}
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
