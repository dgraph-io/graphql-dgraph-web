import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Images } from "../images/index"
import Twitter from "../images/twitter.svg"
import Github from "../images/github.svg"
import { Button, Form, Container, Row, Col } from "react-bootstrap"
import DgraphLogo from "../images/graphql-logo.png"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  connectHighlight,
  connectStateResults
} from "react-instantsearch-dom"
import { CustomInstantSearch } from "./InstantSearchBar"
import BackButtonMainWebsite from "./MainWebsiteRedirect"

const searchClient = algoliasearch(
  "0AG2ENC6EL",
  "a0168bfb88c65c544680f95236a33bf1"
)
const config = require("../../config")

//*****************Highlight the search result *******************/

const Hithighlight = ({ hit }) => {
  return hit ? (
    <div className="search-list-item-container">
      <Container>
        <Row className="d-flex align-items-center justify-content-end">
          <Col md={3} className="d-flex justify-content-start">
            <Link to={`${hit.fields.slug}`} className="search-link">
              <div className="search-result-title">{hit.frontmatter.title}</div>
            </Link>
          </Col>

          <Col md={9} className="border-left d-flex justify-content-start">
            <div className="search-result-subtitle">
              {hit.excerpt ? hit.excerpt : hit.frontmatter.title}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  ) : null
}

//************ Conditional rendering for the search result******************

const ConnectStateResults = connectStateResults(
  ({ searchState, searchResults, children }) =>
    searchState.attributeForMyQuery
      ? searchResults && searchResults.nbHits !== 0
        ? children
        : null
      : null
)

const SearchBar = isPopUpVisible => {
  console.log("is visible", isPopUpVisible)
  return (
      <InstantSearch searchClient={searchClient} indexName="GraphQL">
        <CustomInstantSearch />
        <ConnectStateResults>
          {isPopUpVisible.isPopUpVisible ? (
            <Hits hitComponent={Hithighlight} />
          ) : null}
        </ConnectStateResults>
      </InstantSearch>
  )
}

const Header = props => {
  const searchBarRef = React.createRef();

  return (
    <div className="header-search-main-site-container">
      <div className="d-flex justify-content-between border-bottom align-items-center">
        <div className="page-logo d-xs-flex justify-content-between d-sm-flex d-md-flex d-lg-none">
          <div className="menu-icon-container-tablet d-inline-flex">
            <Button
              variant="light"
              bsPrefix="menu-button"
              onClick={() => {
                props.showSideBar(!props.isSideBarVisible)
              }}
            >
              <img src={Images.menu_icon} alt="menuIcon" />
            </Button>
          </div>
          <Link to="/" className="img-logo header-link">
            <img
              src={DgraphLogo}
              alt="Dgraph logo"
              className="full-logo-button"
            />
            <img
              src={Images.partial_logo_icon}
              alt="menuIcon"
              className="partial-logo-button"
            />
          </Link>
        </div>
        <div className="topbar d-flex page-header">
          <SearchBar isPopUpVisible={props.isPopUpVisible}/>
          <div className="page-header justify-content-end">
            <div className="back-to-mainwebsite-container">
              <BackButtonMainWebsite />
            </div>
            <div className="header-icon-containers">
              <a
                href="https://twitter.com/dgraphlabs"
                target="_blank"
                rel="noopener noreferrer"
                style={{ paddingLeft: "24px" }}
              >
                <img src={Twitter} alt="Twitter" className="mb-0" />
              </a>
              <a
                target="_blank"
                href="https://github.com/dgraph-io/graphql-dgraph-web"
                rel="noopener noreferrer"
                style={{ paddingRight: "0" }}
              >
                <img src={Github} alt="Github" className="mb-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ""
}

export default Header

// className="d-flex justify-content-between align-items-start"
