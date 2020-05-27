const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })

    // let value = parent.relativePath.replace(parent.ext, "")

    // if (value === "index") {
    //   value = ""
    // }

    createNodeField({
      name: `slug`,
      node,
      value,
    })

    createNodeField({
      name: "id",
      node,
      value: node.id,
    })

    createNodeField({
      name: "title",
      node,
      value: node.frontmatter.title,
    })
  }
}
