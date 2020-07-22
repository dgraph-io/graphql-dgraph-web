const escapeStringRegexp = require("escape-string-regexp")

const pageQuery = `{
	allMdx{
    nodes{
      id
      fields{
        slug
      }
      frontmatter{
        title
      }
      excerpt
      
    }
  }
}`


const queries = [
  {
    query: pageQuery,
    transformer: ({data}) => data.allMdx.nodes,
    },
]

module.exports = queries