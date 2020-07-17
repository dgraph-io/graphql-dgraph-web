(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{zZyM:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return i}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("q1tI");var n=a("7ljp"),s=a("Bl7J");var r={},l={_frontmatter:r},o=s.a;function i(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,["components"]);return Object(n.b)(o,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",null,a.pageContext.frontmatter.title),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"These are draft docs for Slash GraphQL, which is currently in beta")),Object(n.b)("p",null,"Welcome to Slash GraphQL. By now, you should have created your first deployment, and are looking for a schema to test out. Don't worry, we've got you covered."),Object(n.b)("p",null,"This example is for todo app that can support multiple users. We just have two types: Tasks and Users."),Object(n.b)("p",null,"Here's a schema that works with Slash GraphQL:"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),"type Task {\n  id: ID!\n  title: String! @search(by: [fulltext])\n  completed: Boolean! @search\n  user: User!\n}\n\ntype User {\n  username: String! @id @search(by: [hash])\n  name: String @search(by: [exact])\n  tasks: [Task] @hasInverse(field: user)\n}\n")),Object(n.b)("p",null,"Let's paste that into the schema tab of Slash GraphQL and hit submit. You now have a fully functional GraphQL API that allows you to create, query and modify records of these two types."),Object(n.b)("p",null,"No, really, that's all; nothing else to do; it's there, serving GraphQL --- let's go use it."),Object(n.b)("h2",null,"The Schema"),Object(n.b)("p",null,"The schema itself was pretty simple. It was just a standard GraphQL schema, with a few directives (like ",Object(n.b)("inlineCode",{parentName:"p"},"@search"),"), which are specific to Slash GraphQL."),Object(n.b)("p",null,"The task type has four fields: id, title, completed and the user. The title has the ",Object(n.b)("inlineCode",{parentName:"p"},"@search")," directive on it, which tells Slash Graphql that this field can be used in full text search queries."),Object(n.b)("p",null,"The User type uses the username field as an ID, and we will put the email address into that field."),Object(n.b)("p",null,"Let's go ahead and populate some data into this fresh database."),Object(n.b)("h2",null,"GraphQL Mutations"),Object(n.b)("p",null,"If you head over to the API explorer tab, you should see the docs tab, which tells you the queries and mutations that your new database supports. Lets create a bunch of tasks, for a few of our users"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),'mutation AddTasks {\n  addTask(input: [\n    {title: "Create a database", completed: false, user: {username: "your-email@example.com"}},\n    {title: "Write A Schema", completed: false, user: {username: "your-email@example.com"}},\n    {title: "Put Data In", completed: false, user: {username: "your-email@example.com"}},\n    {title: "Complete Tasks with UI", completed: false, user: {username: "your-email@example.com"}},\n    {title: "Profit!", completed: false, user: {username: "your-email@example.com"}},\n\n    {title: "Walking", completed: false, user: {username: "frodo@dgraph.io"}},\n    {title: "More Walking", completed: false, user: {username: "frodo@dgraph.io"}},\n    {title: "Discard Jewelery", completed: false, user: {username: "frodo@dgraph.io"}},\n\n    {title: "Meet Dad", completed: false, user: {username: "skywalker@dgraph.io"}},\n    {title: "Dismantle Empire", completed: false, user: {username: "skywalker@dgraph.io"}}\n  ]) {\n    numUids\n    task {\n      title\n      user {\n        username\n      }\n    }\n  }\n}\n')),Object(n.b)("p",null,"Let's also query back the users and their tasks"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),"{\n  queryUser {\n    username,\n    tasks {\n      title\n    }\n  }\n}\n")),Object(n.b)("p",null,"You'll see that Slash figured out that users are unique by their username, and so you only see a single record for each user."),Object(n.b)("h2",null,"Auth"),Object(n.b)("p",null,"Now that we have a schema working, let's update that schema to add some authorization. We'll update the schema so that users can only read their own tasks back."),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),'type Task @auth(\n  query: { rule: """\n    query($USER: String!) {\n      queryTask {\n        user(filter: { username: { eq: $USER } }) {\n          __typename\n        }\n      }\n    }"""}), {\n  id: ID!\n  title: String! @search(by: [fulltext])\n  completed: Boolean! @search\n  user: User!\n}\n\ntype User {\n  username: String! @id @search(by: [hash])\n  name: String @search(by: [exact])\n  tasks: [Task] @hasInverse(field: user)\n}\n\n# Dgraph.Authorization X-Auth-Token https://dgraph.io/jwt/claims RS256 "-----BEGIN PUBLIC KEY-----\\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAp/qw/KXH23bpOuhXzsDp\\ndo9bGNqjd/OkH2LkCT0PKFx5i/lmvFXdd04fhJD0Z0K3pUe7xHcRn1pIbZWlhwOR\\n7siaCh9L729OQjnrxU/aPOKwsD19YmLWwTeVpE7vhDejhnRaJ7Pz8GImX/z/Xo50\\nPFSYdX28Fb3kssfo+cMBz2+7h1prKeLZyDk30ItK9MMj9S5y+UKHDwfLV/ZHSd8m\\nVVEYRXUNNzLsxD2XaEC5ym2gCjEP1QTgago0iw3Bm2rNAMBePgo4OMgYjH9wOOuS\\nVnyvHhZdwiZAd1XtJSehORzpErgDuV2ym3mw1G9mrDXDzX9vr5l5CuBc3BjnvcFC\\nFwIDAQAB\\n-----END PUBLIC KEY-----"\n')),Object(n.b)("p",null,"Slash GraphQL allows you to pass JWT with custom claims as a header, and will apply rules to control who can query or modify the data in your database. The ",Object(n.b)("inlineCode",{parentName:"p"},"@auth")," directive controls how these rules are applied, as filters that are generated from the JWT token."),Object(n.b)("p",null,"In our schema, we specify that one can only query tasks if the tasks's user has a username that matches ",Object(n.b)("inlineCode",{parentName:"p"},"$USER"),", a field in the JWT token."),Object(n.b)("p",null,"The Authorization magic comment specifies the header the JWT comes from, the domain, and the key that's signed it. In this example, the key is tied to our dev Auth0 account."),Object(n.b)("p",null,"More information on how this works in ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"../doc/authorization/"}),"the documentation"),"."),Object(n.b)("p",null,"Let's try querying back the tasks. We should be getting empty results here, since you no longer have access."),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),"{\n  queryTask {\n    title\n  }\n}\n")),Object(n.b)("h2",null,"Testing it out with a Simple UI"),Object(n.b)("p",null,"We've built a todo app with react that you can use to close these todos off. Let's head over to our sample react app, deployed at ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://relaxed-brahmagupta-f8020f.netlify.app/"}),"https://relaxed-brahmagupta-f8020f.netlify.app/"),"."),Object(n.b)("p",null,"You can try creating an account with your email, or logging in with frodo / skywalker. Like the first death star, Luke wasn't big on security, his password is ",Object(n.b)("inlineCode",{parentName:"p"},"password"),". Frodo has the same password."))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-slash-graphql-slash-quick-start-mdx-a50cce26dd2243aa47f6.js.map