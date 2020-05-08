module.exports = [
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
