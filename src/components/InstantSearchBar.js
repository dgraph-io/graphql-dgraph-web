import React from 'react';
import {Button , Form} from 'react-bootstrap';
import { AiOutlineSearch } from "react-icons/ai"
import { IconContext } from "react-icons"

import { createConnector } from 'react-instantsearch-dom';

const connectWithQuery = createConnector({
  displayName: 'WidgetWithQuery',
  getProvidedProps(props, searchState) {
    
    const currentRefinement = searchState.attributeForMyQuery || '';
    return { currentRefinement };
  },
  refine(props, searchState, nextRefinement) {

    return {
      
      ...searchState,
      attributeForMyQuery: nextRefinement,
    };
  },
  getSearchParameters(searchParameters, props, searchState) {
    
    return searchParameters.setQuery(searchState.attributeForMyQuery || '');
  },
  cleanUp(props, searchState) {
    const { attributeForMyQuery, ...nextSearchState } = searchState;

    return nextSearchState;
  },
});

const InstantSearch = ({ currentRefinement, refine }) => (
    
        <div className="d-flex align-items-center search-bar-container">
          <IconContext.Provider value={{ color: "#e3e8ee" }}>
            <div>
              <AiOutlineSearch />
            </div>
          </IconContext.Provider>
          <Form className="document-search-bar">
            <Form.Group controlId="formBasicText" bsPrefix="document-form-group" >
              <Form.Control type="input" size="lg" placeholder="Search documentation..." bsPrefix="document-form-control" 
                value={currentRefinement}
                onChange={e => refine(e.currentTarget.value)}
                autoComplete="off"
                />
            </Form.Group>
          </Form>
        </div>
      
);

export const CustomInstantSearch = connectWithQuery(InstantSearch);
