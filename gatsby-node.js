const config = require("./config")
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent)

    let value = parent.relativePath.replace(parent.ext, "")

    if (value === "index") {
      value = ""
    }


    // createNodeField({
    //   name: `order`,
    //   node,
    //   value: config.findIndex(obj =>
    //     parent.relativePath.includes(obj.path.split("/")[0])
    //   ),
    // })

    // createNodeField({
    //     name: `valParent`,
    //     node,
    //     value: value.split('/').reverse()[1] === undefined? "" : value.split('/').reverse()[1]
    // })

    // createNodeField({
    //     name: `mainParent`,
    //     node,
    //     value: value.split("/")[0]
    // })

    createNodeField({
      name: `slug`,
      node,
      value: `/${value}`,
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
