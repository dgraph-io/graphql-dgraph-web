import React from "react"
import Helmet from 'react-helmet'

import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "./layout.css"
import "./seti.css"
import SideBar from "./sidebar"
import Header from "./header"
import SideBarRight from './sidebarright'
import { Location } from "@reach/router"
import { Fontawesome } from "fontawesome"
import SEO from "../components/seo"
import "../assets/style/custom.scss"

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
   
          <Location>
                  {({ location }) => {
                    return (
                  <Helmet>
                    <link rel="canonical" href={location.href}/>
                    </Helmet>)
             }}
             </Location>

          
          <SideBar />

          <div className="content-wrap">
          <Header siteTitle={data.site.siteMetadata.title} />

            <div className="landing-pg  pl-5">

             
              {props.children}
            </div>
            <div className="sidebar-right-container">
                <Location>
                  {({ location }) => {
                    return <SideBarRight file={location.pathname} />
                  }}
                </Location>
              </div>
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
