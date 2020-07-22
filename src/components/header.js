import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Twitter from "../images/twitter.svg"
import Github from "../images/github.svg"
import { Button, Form , Container , Row , Col} from "react-bootstrap"
import { AiOutlineSearch } from "react-icons/ai"
import { MdChevronLeft } from "react-icons/md"
import { IconContext } from "react-icons"
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
        <Col md={6} className="d-flex justify-content-center">
          <Link to={`${hit.fields.slug}`}>
            <div className="search-result-title">{hit.frontmatter.title}</div>
          </Link>
        </Col>

        <Col md={6} className="border-left d-flex justify-content-start">
          <div className="search-result-subtitle">{hit.excerpt?hit.excerpt:hit.frontmatter.title}</div>
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

const SearchBar = () => (
  <InstantSearch searchClient={searchClient} indexName="GraphQL">
    <CustomInstantSearch />
    <ConnectStateResults>
      <Hits hitComponent={Hithighlight} />
    </ConnectStateResults>
  </InstantSearch>
)

const BackIcon = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#B7B7B7" }}>
        <MdChevronLeft viewBox="0 0 12 20" />
      </IconContext.Provider>
      <MdChevronLeft viewBox="7 0 20 20" />
    </>
  )
}

const BackButtonMainWebsite = () => {
  return (
    <div className="back-button-main-website">
      <Button
        as="a"
        href="https://dgraph.io/"
        bsPrefix="navigate-main-website-button ml-auto"
      >
        <BackIcon />
        Back to Main Website
      </Button>
    </div>
  )
}

const Header = ({ siteTitle }) => {
  return (
    <div className="topbar d-flex page-header">
      <SearchBar />
      <div className="page-header justify-content-end">
        <BackButtonMainWebsite />

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
