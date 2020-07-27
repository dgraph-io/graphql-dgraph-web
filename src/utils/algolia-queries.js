const escapeStringRegexp = require("escape-string-regexp")

const pageQuery = `{
  allMdx {
    nodes {
      id
      tableOfContents
      frontmatter{
        title
      }
      excerpt
      fields {
        slug
      }
    }
  }
}
`

// const pageQuery2 = `{
// 	allMdx{
//     nodes{
//       id
//       tableOfContents
//       excerpt
//       fields{
//         slug
//       }
      
//     }
//   }
// }`



// function pageToAlgoliaRecord1(searchRecord) {
//   return {
//     objectID:searchRecord.id,
//     title:searchRecord.frontmatter.title,
//     url: searchRecord.fields.slug,
//   }
// }

function pageToAlgoliaRecord2(searchRecord) {
  return {
    objectID:searchRecord.id,


  }
}


const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.allMdx.nodes
  }
  // ,
  // {
  //   query: pageQuery2,
  //   transformer: ({ data }) => data.allMdx.nodes
  // }
]

module.exports = queries
