import React from "react"

export const GlobalStateContext = React.createContext()
export const GlobalReducerContext = React.createContext()

const initialState = {
  sideBarCategoryIndex: 0,
  sideBarCategoryClassName: "Slash GraphQL",
  renderRightSideBar:true
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SELECT_SIDEBAR_CONTENT_CATEGORY": {
      return {
        ...state,
        sideBarCategoryClassName: action.categoryName,
        sideBarCategoryIndex: action.categoryIndex
      }
    }

    case "HIDE_RIGHT_SIDEBAR": {
      return {
        ...state,
        renderRightSideBar:action.showSideBar
      }
    }

    default:
      return {
        ...state
      }
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalReducerContext.Provider value={dispatch}>{children}</GlobalReducerContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
