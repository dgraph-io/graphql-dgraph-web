(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"/HHH":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return i}));n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/"),n("q1tI");var a=n("7ljp"),r=n("Bl7J");var o={},s={_frontmatter:o},l=r.a;function i(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(l,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",null,n.pageContext.frontmatter.title),Object(a.b)("p",null,"Let's say we want to integrate our app with an existing external REST API.  There's a few things we need to know:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"the URL of the API, the path and any parameters required"),Object(a.b)("li",{parentName:"ul"},"the shape of the resulting JSON data"),Object(a.b)("li",{parentName:"ul"},"the method (GET, POST, etc.), and"),Object(a.b)("li",{parentName:"ul"},"what authorization we need to pass to the external endpoint")),Object(a.b)("p",null,"The custom query can take any number of scalar arguments and use those to construct the path, parameters and body (we'll see an example of that in the custom mutation section) of the request that gets sent to the remote endpoint."),Object(a.b)("p",null,"In an app, you'd deploy an endpoint that does some custom work and returns data that's used in your UI, or you'd wrap some logic or call around an existing endpoint.  So that we can walk through a whole example, let's use the Twitter API."),Object(a.b)("p",null,"To integrate a call that returns the data of Twitter user with our app, all we need to do is add the expected result type ",Object(a.b)("inlineCode",{parentName:"p"},"TwitterUser")," and set up a custom query:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),'type TwitterUser @remote {\n    id: ID!\n    name: String\n    screen_name: String\n    location: String\n    description: String\n    followers_count: Int\n    ...\n}\n\ntype Query{\n    getTwitterUser(name: String!): TwitterUser @custom(http:{\n        url: "https://api.twitter.com/1.1/users/show.json?screen_name=$name"\n        method: "GET",\n        forwardHeaders: ["Authorization"]\n    })\n}\n')),Object(a.b)("p",null,"Dgraph will then be able to accept a GraphQL query like"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),'query {\n    getTwitterUser(name: "dgraphlabs") {\n        location\n        description\n        followers_count\n    }\n}\n')),Object(a.b)("p",null,"construct a HTTP GET request to ",Object(a.b)("inlineCode",{parentName:"p"},"https://api.twitter.com/1.1/users/show.json?screen_name=dgraphlabs"),", attach header ",Object(a.b)("inlineCode",{parentName:"p"},"Authorization")," from the incoming GraphQL request to the outgoing HTTP, and make the call and return a GraphQL result."),Object(a.b)("p",null,"The result JSON of the actual HTTP call will contain the whole object from the REST endpoint (you can see how much is in the Twitter user object ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://developer.twitter.com/en/docs/tweets/data-dictionary/overview/user-object"}),"here"),").  But, the GraphQL query only asked for some of that, so Dgraph filters out any returned values that weren't asked for in the GraphQL query and builds a valid GraphQL response to the query and returns GraphQL."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "data": {\n        "getTwitterUser": { "location": ..., "description": ..., "followers_count": ... }\n    }\n}\n')),Object(a.b)("p",null,"Your version of the remote type doesn't have to be equal to the remote type.  For example, if you don't want to allow users to query the full Twitter user, you include in the type definition only the fields that can be queried."),Object(a.b)("p",null,"All the usual options for custom queries are allowed; for example, you can have multiple queries in a single GraphQL request and a mix of custom and Dgraph generated queries, you can get the result compressed by setting ",Object(a.b)("inlineCode",{parentName:"p"},"Accept-Encoding")," to ",Object(a.b)("inlineCode",{parentName:"p"},"gzip"),", etc."),Object(a.b)("hr",null))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-doc-custom-query-mdx-65c87ae3fc780018cc71.js.map