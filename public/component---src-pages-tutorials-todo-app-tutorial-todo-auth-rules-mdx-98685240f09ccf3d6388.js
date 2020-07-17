(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{wxQT:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return o}));n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/"),n("q1tI");var a=n("7ljp"),r=n("Bl7J");var s={},i={_frontmatter:s},l=r.a;function o(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(l,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",null,n.pageContext.frontmatter.title),Object(a.b)("p",null,"In the current state of the app, we can view anyone's todos, but we want our todos to be private to us. Let's do that using the ",Object(a.b)("inlineCode",{parentName:"p"},"auth")," directive to limit that to the user's todos."),Object(a.b)("p",null,"We want to limit the user to its own todos, so we will define the query in ",Object(a.b)("inlineCode",{parentName:"p"},"auth")," to filter depending on the user's username."),Object(a.b)("p",null,"Let's update the schema to include that, and then let's understand what is happening there -"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),'type Task @auth(\n    query: { rule: """\n        query($USER: String!) {\n            queryTask {\n                user(filter: { username: { eq: $USER } }) {\n                    __typename\n                }\n            }\n        }"""}){\n    id: ID!\n    title: String! @search(by: [fulltext])\n    completed: Boolean! @search\n    user: User!\n}\ntype User {\n  username: String! @id @search(by: [hash])\n  name: String\n  tasks: [Task] @hasInverse(field: user)\n}\n')),Object(a.b)("p",null,"Resubmit the updated schema -"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"curl -X POST localhost:8080/admin/schema --data-binary '@schema.graphql'\n")),Object(a.b)("p",null,"Now let's see what does the definition inside the ",Object(a.b)("inlineCode",{parentName:"p"},"auth")," directive means. Firstly, we can see that this rule applies to ",Object(a.b)("inlineCode",{parentName:"p"},"query")," (similarly we can define rules on ",Object(a.b)("inlineCode",{parentName:"p"},"add"),", ",Object(a.b)("inlineCode",{parentName:"p"},"update")," etc.). "),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"})," query ($USER: String!) {\n  queryTask {\n    user(filter: {username: {eq: $USER}}) {\n      __typename\n    }\n  }\n}\n")),Object(a.b)("p",null,"The rule contains a parameter ",Object(a.b)("inlineCode",{parentName:"p"},"USER")," which we will use to filter the todos by a user. As we know ",Object(a.b)("inlineCode",{parentName:"p"},"queryTask")," returns an array of ",Object(a.b)("inlineCode",{parentName:"p"},"task")," that contains the ",Object(a.b)("inlineCode",{parentName:"p"},"user")," also and we want to filter it by ",Object(a.b)("inlineCode",{parentName:"p"},"user"),", so we compare the ",Object(a.b)("inlineCode",{parentName:"p"},"username")," of the user with the ",Object(a.b)("inlineCode",{parentName:"p"},"USER")," passed to the auth rule (logged in user). "),Object(a.b)("p",null,"Now the next thing you would be wondering is that how do we pass a value for the ",Object(a.b)("inlineCode",{parentName:"p"},"USER")," parameter in the auth rule since its not something that you can call, the answer is pretty simple actually that value will be extracted from the JWT token which we pass to our GraphQL API as a header and then it will execute the rule. "),Object(a.b)("p",null,"Let's see how we can do that in the next step using Auth0 as an example."))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-todo-app-tutorial-todo-auth-rules-mdx-98685240f09ccf3d6388.js.map