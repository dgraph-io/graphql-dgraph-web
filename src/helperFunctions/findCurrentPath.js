import {categoryClassName , paths} from '../utils/graphQLConstants/SideBarCategory';

export const  getCategoryIndex = (dispatch , locationParam) => {
    let path
    path = locationParam.location.pathname.split('/');
    switch (path[1]) {

      case paths.slashGraph: {
        dispatch({
          type: "SELECT_SIDEBAR_CONTENT_CATEGORY",
          categoryName: categoryClassName.slashGraph,
          categoryIndex: 0
        })
        return 0
      }
     
      case paths.docs: {
        dispatch({
          type: "SELECT_SIDEBAR_CONTENT_CATEGORY",
          categoryName: categoryClassName.docs,
          categoryIndex: 1
        })
        return 1
      }
      case paths.examples: {
        dispatch({
          type: "SELECT_SIDEBAR_CONTENT_CATEGORY",
          categoryName: categoryClassName.examples,
          categoryIndex: 2
        })
        return 2
      }
      case paths.dgraphQl: {
        dispatch({
          type: "SELECT_SIDEBAR_CONTENT_CATEGORY",
          categoryName: categoryClassName.dgraphQl,
          categoryIndex: 3
        })
        return 3
      }
      case paths.tutorials: {
        dispatch({
          type: "SELECT_SIDEBAR_CONTENT_CATEGORY",
          categoryName:categoryClassName.tutorials,
          categoryIndex: 4
        })
        return 4
      }
   
      case paths.tools: {
        dispatch({
          type: "SELECT_SIDEBAR_CONTENT_CATEGORY",
          categoryName: categoryClassName.tools,
          categoryIndex: 5
        })
        return 5
      }

      default:
        return 0
    }
  }