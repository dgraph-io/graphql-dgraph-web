import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Helmet from 'react-helmet'

import "./layout.css"
import "./seti.css"
import SideBar from "./sidebar"
import Footer from "./Footer"
import SideBarRight from "./sidebarright"
import { Location } from "@reach/router"
import SEO from "../components/seo"


const canonical = window.location.href; 
const Layout = (props) => {
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
          <SEO title={props.pageContext !== undefined? props.pageContext.frontmatter.title:  "Dgraph GraphQL"} />
          <Helmet>
            <link rel="canonical" href={canonical} />
            </Helmet>

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
              {props.children}
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
