const escapeStringRegexp = require("escape-string-regexp")

const pageQuery = `{
  allMdx {
    nodes {
      tableOfContents
      excerpt
      fields{
        slug
      }
    }
  }
}
`


const queries = [
  {
    query: pageQuery,
    transformer: ({data}) => data.allMdx.nodes,
    },
]

module.exports = queries