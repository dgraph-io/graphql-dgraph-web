import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import "./seti.css"
import SideBar from "./sidebar"
import Footer from "./Footer"
import SideBarRight from "./sidebarright"
import { Location } from "@reach/router"

const Layout = ({ children }) => {
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
          <Location>
            {({ location }) => {
              return (
                <Helmet>
                  <link rel="canonical" href={location.href} />
                </Helmet>
              )
            }}
          </Location>
          <Header siteTitle={data.site.siteMetadata.title} />
          <SideBar />
          <div className="content-wrap">
            <div className="landing-pg">
              <div style={{ float: "right", paddingTop: "150px" }}>
                <Location>
                  {({ location }) => {
                    return <SideBarRight file={location.pathname} />
                  }}
                </Location>
              </div>
              {children}
            </div>
            <Footer />
          </div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
