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
    subOptions: [
      { name: "Scalars" },
      { name: "Enums" },
      { name: "Types" },
      { name: "Interfaces" },
      {
        name: "Directives",
        children: [{ name: "Inverse" }, { name: "Search" }],
      },
    ],
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
  {
    path: "todo-app-tutorial/index.mdx",
    title: "Todo App Tutorial",
    children: [
      {
        path: "todo-app-tutorial/todo-schema-design.mdx",
        title: "Schema Design",
      },
      {
        path: "todo-app-tutorial/todo-UI.mdx",
        title: "Basic UI",
      },
      {
        path: "todo-app-tutorial/todo-auth-rules.mdx",
        title: "Auth Rules",
      },
      {
        path: "todo-app-tutorial/todo-auth0-jwt.mdx",
        title: "Using Auth0's JWT",
      },
      {
        path: "todo-app-tutorial/deploy.mdx",
        title: "Deploy on Slash GraphQL",
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
