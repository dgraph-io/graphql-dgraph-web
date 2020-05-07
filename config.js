module.exports = [
  {
    path: "quick-start.mdx",
    title: "Quick Start",
  },
  {
    path: "admin.mdx",
    title: "Admin",
  },
  {
    path: "schema.mdx",
    title: "Schema",
  },
  {
    path: "example.mdx",
    title: "Example",
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
    path: "api.mdx",
    title: "The API",
  },
  {
    path: "dgraph.mdx",
    title: "Dgraph",
  },
  {
    path: "clients-example/index.mdx",
    title: "Client-examples",
    children: [
      {
        path: "clients-example/react.mdx",
        title: "React",
      },
    ],
  },
]
