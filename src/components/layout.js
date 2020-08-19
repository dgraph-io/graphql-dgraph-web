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
  const { renderRightSideBar, dispatch } = props
  const [isSideBarVisible, showSideBar] = useState(false)
  const [isPopUpVisible, closePopUp] = React.useState(true)

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
          {/* <Helmet>
          <script src="./docSearch.js" type="text/javascript" />
        </Helmet> */}
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
          <Helmet>
            <script type="text/javascript">
              {`
                    adroll_adv_id = "L42C3U2UXBBPVAMISVXVLC"
                    adroll_pix_id = "MOR4VUNPK5B2LHEZ2NNTDX"
                    adroll_version = "2.0"
                    console.log("inadroll")
                    ;(function(w, d, e, o, a) {
                      w.__adroll_loaded = true
                      w.adroll = w.adroll || []
                      w.adroll.f = ["setProperties", "identify", "track"]
                      var roundtripUrl =
                        "https://s.adroll.com/j/" + adroll_adv_id + "/roundtrip.js"
                      for (a = 0; a < w.adroll.f.length; a++) {
                        w.adroll[w.adroll.f[a]] =
                          w.adroll[w.adroll.f[a]] ||
                          (function(n) {
                            return function() {
                              w.adroll.push([n, arguments])
                            }
                          })(w.adroll.f[a])
                      }
                      e = d.createElement("script")
                      o = d.getElementsByTagName("script")[0]
                      e.async = 1
                      e.src = roundtripUrl
                      o.parentNode.insertBefore(e, o)
                    })(window, document)
                    adroll.track("pageView")

                `}
            </script>
            {console.log(
              "after scipt",
              document.getElementsByTagName("head")[0].innerHTML
            )}
          </Helmet>
          <div
            className="sidebar-container-visible"
            onClick={() => {
              dispatch({ type: "GET_CURRENT_REF", showSearchResult: false })
            }}
          >
            <SideBar
              selectSideBarContent={(nodeTitle, contentClass) => {
                setContentCategory(nodeTitle, contentClass)
              }}
              sidebarcategoryindex={sideBarCategoryIndex}
              showSideBar={isSideBarVisible => showSideBar(isSideBarVisible)}
            />
          </div>
          {isSideBarVisible && (
            <div
              className="toggle-sidebar"
              onClick={() => {
                dispatch({ type: "GET_CURRENT_REF", showSearchResult: false })
              }}
            >
              <SideBar
                selectSideBarContent={(nodeTitle, contentClass) => {
                  setContentCategory(nodeTitle, contentClass)
                }}
                sidebarcategoryindex={sideBarCategoryIndex}
                showSideBar={isSideBarVisible => showSideBar(isSideBarVisible)}
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
              onClick={() =>
                dispatch({ type: "GET_CURRENT_REF", showSearchResult: false })
              }
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
                onClick={() => {
                  dispatch({
                    type: "GET_CURRENT_REF",
                    showSearchResult: false
                  })
                }}
                className={
                  getSideBarClass(props)
                    ? "sidebar-right-container-extended"
                    : "sidebar-right-container"
                }
              >
                {
                  <Location>
                    {({ location }) => {
                      return (
                        <SideBarRight
                          file={location.pathname}
                          sectionScroll={getSideBarClass(props)}
                        />
                      )
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

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
