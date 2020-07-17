import React,{useState} from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import "./seti.css"
import SideBar from "./sidebar"
import SideBarRight from "./sidebarright"
import { Location } from "@reach/router"


const Layout = (props) => {
  const [currentURL, selectSideBarContent] = useState("")

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
              selectSideBarContent(location.pathname);
              return (
                <Helmet>
                  <link rel="canonical" href={location.href} />
                </Helmet>
              )
            }}
          </Location>
          <SideBar/>
          <div className="content-wrap">
            <Header siteTitle={data.site.siteMetadata.title} />

            <div
              className={
                currentURL==='/schema'
                  ? "landing-pg  pl-5"
                  : "landing-pg-extend pl-5"
              }
            >
              {props.children}
            </div>
            
              <div className="sidebar-right-container">
                {
                  <Location>
                    {({ location }) => {
                      return <SideBarRight file={location.pathname} />
                    }}
                  </Location>
                }
              </div>
          </div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
