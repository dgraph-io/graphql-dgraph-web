const DocumentationReference = [
  
  {
    path: "doc/index.mdx",
    title: "Introduction",
  },
  {
    path: "doc/api.mdx",
    title: "The API",

  },
  {
    path: "doc/example.mdx",
    title: "Example",
  },
  {
    path: "doc/schema.mdx",
    title: "Schema",
    showSideBar: true,
    subOptions: [
      { name: "Scalars" },
      { name: "Enums" },
      { name: "Types" },
      { name: "Interfaces" },
      {
        name: "Directives",
        children: [{ name: "Inverse" }, { name: "Search" }]
      }
    ]
  },
  {
    path: "doc/authorization/index.mdx",
    title: "Authorization",
    children: [
      {
        path: "doc/authorization/directive.mdx",
        title: "The `@auth` directive"
      },
      {
        path: "doc/authorization/mutations.mdx",
        title: "Mutations"
      }
    ]
  },
  {
    path: "doc/custom/index.mdx",
    title: "Custom Resolvers",
    children: [
      {
        path: "doc/custom/directive.mdx",
        title: "The `@custom` directive"
      },
      {
        path: "doc/custom/query.mdx",
        title: "Custom Queries"
      },
      {
        path: "doc/custom/mutation.mdx",
        title: "Custom Mutations"
      },
      {
        path: "doc/custom/field.mdx",
        title: "Custom Fields"
      }
    ]
  },
 
  {
    path: "doc/admin.mdx",
    title: "Admin"
  },
  {
    path: "doc/dgraph.mdx",
    title: "GraphQL on Existing Dgraph"
  }
]

const Graphql = [
  {
    title: "Introduction",
    path: "dgraph-graphql/index.mdx",
    showSideBar:true,
    subOptions: [
      { name: "Welcome to GraphQL", scrollTo:'Welcome_to_GraphQL' },
      { name: "GraphQL Quick Start" ,scrollTo:'GraphQL_Quick_Start'},
    ]
  },
  {
    title: "GraphQL Quick Start",
    path: "dgraph-graphql/quick-start.mdx",
    showSideBar: false
  },
]
const tutorial = [
  {
    title: "Introduction",
    path: "tutorials/index.mdx",
    showSideBar: true
  },
  {
    path: "tutorials/todo-app-tutorial/index.mdx",
    title: "Todo App Tutorial",
    children: [
      {
        path: "tutorials/todo-app-tutorial/todo-schema-design.mdx",
        title: "Schema Design",
        showSideBar: true,
        subOptions: [
          { name: "Running" },
          { name: "Mutating" },
          { name: "Querying" },
          { name: "Querying with Filters" }
        ]
      },
      {
        path: "tutorials/todo-app-tutorial/todo-UI.mdx",
        title: "Basic UI",
        showSideBar: true,
        subOptions: [
          { name: "Create React app" },
          { name: "Install dependencies" },
          { name: "Setup Apollo Client" },
          { name: "Queries and Mutations" },
          { name: "Auth0 integration" }
        ]
      },
      {
        path: "tutorials/todo-app-tutorial/todo-auth-rules.mdx",
        title: "Auth Rules"
      },
      {
        path: "tutorials/todo-app-tutorial/todo-auth0-jwt.mdx",
        title: "Using Auth0's JWT"
      },
      {
        path: "tutorials/todo-app-tutorial/deploy.mdx",
        title: "Deploy on Slash GraphQL"
      }
    ]
  },
]

const toolsAndDeployment = [
    {
    title: "Tools and Deployments",
    path: "recipes/index.mdx",
    showSideBar: true
  }
]

const slashGraphQL = [
  {
    path: "slash-graphql/index.mdx",
    title: "Introduction"
  },
  {
    path: "slash-graphql/slash-quick-start.mdx",
    title: "Slash Quick Start (draft)"
  },
]

const exampleApps = [
  {
    title: "Example Apps",
    path: "example-apps/index.mdx",
    showSideBar: true
  }
]

const versions = ["master", "v20.03.1"]
const currentVersion = "master"
const URL = "https://graphql.dgraph.io/"

module.exports.sidebarOptions = [
  slashGraphQL,
  DocumentationReference,
  exampleApps,
  Graphql,
  tutorial,
  toolsAndDeployment
]
module.exports.versions = versions
module.exports.currentVersion = currentVersion
module.exports.URL = URL
