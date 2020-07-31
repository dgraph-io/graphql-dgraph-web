import React from "react"

export const GlobalStateContext = React.createContext()
export const GlobalReducerContext = React.createContext()

const initialState = {
  sideBarCategoryIndex: 3,
  sideBarCategoryClassName: "Dgraph GraphQL",
  renderRightSideBar: true,
  currentVersion: "master",
  currentExpandedAccordion: '',
  showSearchResult: true,
  searchKeyowrd: '',
  toggleAccordionArray: []
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "SELECT_SIDEBAR_CONTENT_CATEGORY": {
      if(state.sideBarCategoryIndex === action.categoryIndex)
      return {
        ...state,
        sideBarCategoryClassName: action.categoryName,
        sideBarCategoryIndex: action.categoryIndex
      }
      else
      return {
        ...state,
        sideBarCategoryClassName: action.categoryName,
        sideBarCategoryIndex: action.categoryIndex,
        toggleAccordionArray:[]
      }
    }

    case "HIDE_RIGHT_SIDEBAR": {
      return {
        ...state,
        renderRightSideBar: action.showSideBar
      }
    }

    case "SELECT_VERSION": {
      return {
        ...state,
        currentVersion: action.version
      }
    }

    case "CURRENT_EXPANDED_ACCORDION": {
      return {
        ...state,
        currentExpandedAccordion: action.expandedAccordion
      }
    }

    case 'GET_CURRENT_REF': {
      return {
        ...state,
        showSearchResult: action.showSearchResult

      }
    }

    case 'SEARCH_KEYWORD': {
      console.log('[...]' + state.searchKeyowrd);
      return {
        ...state,
        searchKeyowrd: action.searchKeyowrd
      }
    }

    case 'TOGGLE_ACCORDION': {
      let tempToogleAccordionArray = state.toggleAccordionArray;

      tempToogleAccordionArray[action.index] = {
        toggleListItemMarker: action.toggleListItemMarker,
        showAccordion: action.showAccordion
      }

      return {
        ...state,
        toggleAccordionArray:[...tempToogleAccordionArray]
      }
    }
    case "CLEAR_LOCAL_STORAGE":
      return {
        ...initialState
      }

    default:
      return state
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalReducerContext.Provider value={dispatch}>
        {children}
      </GlobalReducerContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
