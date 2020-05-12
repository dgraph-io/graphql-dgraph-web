const sidebarOptions = [
  {
    path: "quick-start.mdx",
    title: "Quick Start",
  },
  {
    path: "api.mdx",
    title: "The API",
  },
  {
    path: "example.mdx",
    title: "Example",
  },
  {
    path: "schema.mdx",
    title: "Schema",
  },
  {
    path: "custom/index.mdx",
    title: "Custom Resolvers",
    children: [
      {
        path: "custom/directive.mdx",
        title: "The `@custom` directive"
      },
      {
        path: "custom/query.mdx",
        title: "Custom Queries"
      },
      {
        path: "custom/mutation.mdx",
        title: "Custom Mutations"
      },
      {
        path: "custom/field.mdx",
        title: "Custom Fields"
      }
    ]
  },
  {
    path: "admin.mdx",
    title: "Admin",
  },
  {
    path: "dgraph.mdx",
    title: "GraphQL on Existing Dgraph",
  },
  {
    path: "sample-apps/index.mdx",
    title: "Sample-Apps",
    children: [
      {
        path: "sample-apps/blog-app.mdx",
        title: "Blog App",
      },
      {
        path: "sample-apps/todo-app.mdx",
        title: "Todo App",
      },
      {
        path: "sample-apps/stackoverflow-app.mdx",
        title: "StackOverflow App",
      },
    ],
  },
]

const versions = ["master", "v1", "v2"]
const currentVersion = "master"
const URL = "http://localhost:8000/"

module.exports.sidebarOptions = sidebarOptions
module.exports.versions = versions
module.exports.currentVersion = currentVersion
module.exports.URL = URL
