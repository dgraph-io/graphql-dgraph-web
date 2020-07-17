(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"c/g9":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return l}));n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/"),n("q1tI");var a=n("7ljp"),s=n("Bl7J");var r={},o={_frontmatter:r},i=s.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,["components"]);return Object(a.b)(i,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",null,n.pageContext.frontmatter.title),Object(a.b)("p",null,"A worked example of how to build a GraphQL API for an App."),Object(a.b)("h1",null,"GraphQL, Dgraph and Graphs"),Object(a.b)("p",null,"You're familiar with GraphQL types, fields and resolvers.  Maybe you've written an app that adds GraphQL over a REST endpoint or maybe over a relational database.  So you know how GraphQL sits over those sources and issues many queries to translate the REST/relational data into something that looks like a graph.  "),Object(a.b)("p",null,"You know there's a cognitive jump because your app is about a graph, but you've got to design a relational schema and work out how that translates as a graph; you'll think about the app in terms of the graph, but always have to mentally translate back and forth between the relational and graph models.  There are engineering challenges around the translation as well as the efficiency of the queries.  "),Object(a.b)("p",null,"There's none of that here.  "),Object(a.b)("p",null,"Dgraph GraphQL is part of Dgraph, which stores a graph - it's a database of nodes and edges.  So it's efficient to store, query and traverse as a graph.  Your data will get stored just like you design it in the schema, and the queries are a single graph query that does just what the GraphQL query says."),Object(a.b)("h2",null,"How it Works"),Object(a.b)("p",null,"With Dgraph you design your application in GraphQL.  You design a set of GraphQL types that describes your requirements.  Dgraph takes those types, prepares graph storage for them and generates a GraphQL API with queries and mutations."),Object(a.b)("p",null,"You design a graph, store a graph and query a graph.  You think and design in terms of the graph that your app is based around."),Object(a.b)("p",null,"Let's move on to the design process - it's graph-first, in fact, it's GraphQL-first.  We'll design the GraphQL types that our example app is based around, and ... we'll there's no ",Object(a.b)("em",{parentName:"p"},"and")," ... from that, you get a GraphQL API for those types; you just move on to building the app around it."),Object(a.b)("h2",null,"An Example App"),Object(a.b)("p",null,"Say you are working to build a social media app.  In the app, there are authors writing questions and others answering or making comments to form conversation threads.  You'll want to render things like a home page for each author as well as a feed of interesting posts or search results.  Maybe authors can subscribe to search terms or tags that interest them.  Navigating to a post renders the initial post as well as the following conversation thread."),Object(a.b)("h2",null,"Your First Schema"),Object(a.b)("p",null,"Here we'll design a schema for the app and, in the next section, turn that into a running GraphQL API with Dgraph."),Object(a.b)("p",null,"It's version 0.1 of the app, so let's start small. For the first version, we are interested in an author's name and the list of things they've posted.  That's a pretty simple GraphQL type."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),"type Author {\n  username: String!\n  posts: [Post] \n}\n")),Object(a.b)("p",null,"But defining questions and answers is a little trickier.  We could define ",Object(a.b)("inlineCode",{parentName:"p"},"type Question { ... }")," and ",Object(a.b)("inlineCode",{parentName:"p"},"type Answer { ... }"),", but then how would comments work.  We want to be able to comment on questions and comment on answers and even have comment threads: so comments that comment on comments.  "),Object(a.b)("p",null,"We also want to cut down on the amount of boilerplate we need to write, so it's great if we don't need to say that there's an author for a question, and an author for an answer and an author for a comment - see it gets repetitive!"),Object(a.b)("p",null,"GraphQL has interfaces that solve this problem, and Dgraph lets you use them in a way that cuts down on repetition."),Object(a.b)("p",null,"Let's have a GraphQL interface that collects together the common data for the types of text the user can post on the site.  We'll need the author who posted as well as the actual text and the date."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),"interface Post {\n  id: ID!\n  text: String \n  datePublished: DateTime \n  author: Author!\n}\n")),Object(a.b)("p",null,"Questions are a kind of post (that is, questions have ",Object(a.b)("inlineCode",{parentName:"p"},"text"),", a ",Object(a.b)("inlineCode",{parentName:"p"},"datePublished")," and were published by an ",Object(a.b)("inlineCode",{parentName:"p"},"author"),") that also have a list of answers.  Answers themselves answer a particular question (as well as having the data of a post).  And comments can comment on any kind of post: questions, answers or other comments."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),"type Question implements Post {\n  answers: [Answer]\n}\n\ntype Answer implements Post {\n  inAnswerTo: Question!\n}\n\ntype Comment implements Post {\n  commentsOn: Post!\n}\n")),Object(a.b)("p",null,"Given that, we care about more than just the posts an author has made.  Let's say we want to know the questions and answers a user has posted."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),"type Author {\n  username: String!\n  questions: [Question] \n  answers: [Answer]\n}\n")),Object(a.b)("h2",null,"More than Types"),Object(a.b)("p",null,"That's enough to describe the types, but, even in the first version, we'll want some ways to search the data - how else could I find the newest 10 posts about \"GraphQL\".  "),Object(a.b)("p",null,"Dgraph allows adding extra declarative specifications to the schema file, and it uses these to interpret the schema in particular ways or to add features to the GraphQL API it generates."),Object(a.b)("p",null,"Adding the directive ",Object(a.b)("inlineCode",{parentName:"p"},"@search")," tells Dgraph what fields you want to search by.  The post text is an obvious candidate.  We'll want to search that Google-style, with a search like \"GraphQL introduction tutorial\".  That's a full-text search.  We can let the API know that's how we'd like to search posts text by updating the schema with:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),"interface Post {\n  ...\n  text: String @search(by: [fulltext])\n  ...\n}\n")),Object(a.b)("p",null,"Let's say we also want to find authors by name.  A hash-based search is pretty good for that.  "),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),"type Author {\n  ...\n  username: String! @search(by: [hash])\n  ...\n}\n")),Object(a.b)("p",null,"We'll also add less-than, greater-than-or-equal-to date searching on ",Object(a.b)("inlineCode",{parentName:"p"},"datePublished")," - no arguments required to ",Object(a.b)("inlineCode",{parentName:"p"},"@search")," this time."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),"interface Post {\n  ... \n  datePublished: DateTime @search\n  ...\n}\n")),Object(a.b)("p",null,"With those directives in the schema, Dgraph will build search capability into our GraphQL API."),Object(a.b)("p",null,"We also want to make sure that usernames are unique.  The ",Object(a.b)("inlineCode",{parentName:"p"},"@id")," directive takes care of that - it also automatically adds hash searching, so we can drop the ",Object(a.b)("inlineCode",{parentName:"p"},"@search(by: [hash])"),", though having it also causes no harm."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),"type Author {\n  username: String! @id\n  ...\n}\n")),Object(a.b)("p",null,"Now the GraphQL API will ensure that usernames are unique and will build search and mutation capability such that a username can be used like an identifier/key.  The ",Object(a.b)("inlineCode",{parentName:"p"},"id: ID!")," in ",Object(a.b)("inlineCode",{parentName:"p"},"Post")," means that an auto-generated ID will be used to identify posts."),Object(a.b)("p",null,"The only remaining thing is to recognize how GraphQL handles relations. So far, our GraphQL schema says that an author has some questions and answers and that a post has an author, but the schema doesn't connect them as a two-way edge in the graph: e.g. it doesn't say that the questions I can reach from a particular author all have that author as their author.  "),Object(a.b)("p",null,"GraphQL schemas are always under-specified in this way. It's left up to the documentation and implementation to make the two-way connection, if it exists.  Here, we'll make sure they hook up in the right way by adding the directive ",Object(a.b)("inlineCode",{parentName:"p"},"@hasInverse"),"."),Object(a.b)("p",null,"Here it is in the complete GraphQL schema."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),"type Author {\n  username: String! @id\n  questions: [Question] @hasInverse(field: author)\n  answers: [Answer] @hasInverse(field: author)\n}\n\ninterface Post {\n  id: ID!\n  text: String! @search(by: [fulltext])\n  datePublished: DateTime @search\n  author: Author!\n  comments: [Comment] @hasInverse(field: commentsOn)\n}\n\ntype Question implements Post {\n  answers: [Answer] @hasInverse(field: inAnswerTo)\n}\n\ntype Answer implements Post {\n  inAnswerTo: Question!\n}\n\ntype Comment implements Post {\n  commentsOn: Post!\n}\n")),Object(a.b)("h1",null,"Running"),Object(a.b)("p",null,"Starting Dgraph with GraphQL can be done by running from the all-in-one docker image.  ",Object(a.b)("em",{parentName:"p"},"Note: The Dgraph standalone image is great for quick start and exploring, but it's not meant for production use.  Once you want to build an App or persist your data for restarts, you'll need to review the  ",Object(a.b)("a",Object.assign({parentName:"em"},{href:"/doc/admin"}),"admin docs"),".")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"docker run -it -p 8080:8080 dgraph/standalone:master\n")),Object(a.b)("p",null,"That brings Dgraph and enables GraphQL at ",Object(a.b)("inlineCode",{parentName:"p"},"localhost:8080"),".  Dgraph serves two GraphQL endpoints: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"at ",Object(a.b)("inlineCode",{parentName:"li"},"/graphql")," it serves the GraphQL API for your schema; "),Object(a.b)("li",{parentName:"ul"},"at ",Object(a.b)("inlineCode",{parentName:"li"},"/admin")," it serves a GraphQL schema for administering your system.  ")),Object(a.b)("p",null,"We'll use the mutation ",Object(a.b)("inlineCode",{parentName:"p"},"updateGQLSchema")," at the ",Object(a.b)("inlineCode",{parentName:"p"},"/admin")," service to add the GraphQL schema and refresh what's served at ",Object(a.b)("inlineCode",{parentName:"p"},"/graphql"),". "),Object(a.b)("p",null,"Take the schema above, cut-and-paste it into a file called ",Object(a.b)("inlineCode",{parentName:"p"},"schema.graphql")," and run the following curl command."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"curl -X POST localhost:8080/admin/schema --data-binary '@schema.graphql'\n")),Object(a.b)("p",null,"Now Dgraph is serving a GraphQL schema for the types we defined."),Object(a.b)("h1",null,"Introspection"),Object(a.b)("p",null,"So we've taken the input types and generated a running GraphQL API, but what's in the API?"),Object(a.b)("p",null,"The API responds to GraphQL schema introspection, so you can consume it with anything that's GraphQL: e.g. ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/prisma-labs/graphql-playground"}),"GraphQL Playground"),", ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://insomnia.rest/"}),"Insomnia"),", ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/graphql/graphiql"}),"GraphiQL")," and ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/imolorhe/altair"}),"Altair"),".  "),Object(a.b)("p",null,"Point your favorite tool at ",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:8080/graphql")," and schema introspection will show you what's been generated."),Object(a.b)("p",null,"Rather than digging through everything that was generated, let's explore it by running some mutations and queries."),Object(a.b)("h1",null,"Mutations"),Object(a.b)("p",null,"For each type in the input types, Dgraph generated add, update and delete mutations."),Object(a.b)("p",null,"Adding authors and posts is the place to start with mutations."),Object(a.b)("p",null,"The generated GraphQL API contains:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),"type Mutation {\n  ...\n  addAuthor(input: AddAuthorInput): AddAuthorPayload\n  ...\n}\n")),Object(a.b)("p",null,"The input type ",Object(a.b)("inlineCode",{parentName:"p"},"AddAuthorInput")," really just requires a name for the author.  The add mutation can add multiples, so we can add some authors with:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  addAuthor(input: [\n    { username: "Michael" },\n    { username: "Apoorv" }\n  ]) {\n    author {\n      username\n    }\n  }\n}\n')),Object(a.b)("p",null,"Which will return"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "addAuthor": {\n      "author": [\n        {\n          "username": "Michael"\n        },\n        {\n          "username": "Apoorv"\n        }\n      ]\n    }\n  }\n}\n')),Object(a.b)("p",null,"The schema specified those usernames as ",Object(a.b)("inlineCode",{parentName:"p"},"@id"),", so Dgraph makes sure that they are unique and you'll get an error if you try to add an author with a username that already exists (you can update an existing author with the ",Object(a.b)("inlineCode",{parentName:"p"},"updateAuthor")," mutation)."),Object(a.b)("p",null,"The generated GraphQL also contains a mutation for adding questions:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),"type Mutation {\n  ...\n  addQuestion(input: AddQuestionInput): AddQuestionPayload\n  ...\n}\n")),Object(a.b)("p",null,"To add a question, you'll need to link it up to the right author, which you can do using its id - the username.  Of course, you can use GraphQL variables to supply the data."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),"mutation addQuestion($question: AddQuestionInput!){\n  addQuestion(input: [$question]) {\n    question {\n      id\n      text\n      datePublished\n      author {\n        username\n      }\n    }\n  }\n}\n")),Object(a.b)("p",null,"With variables"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "question": {\n    "datePublished": "2019-10-30",\n    "text": "The very fist post about GraphQL in Dgraph.",\n    "author": { "username": "Michael" }\n  }\n}\n')),Object(a.b)("p",null,"That will return something like."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "addQuestion": {\n      "question": [\n        {\n          "id": "0x4",\n          "text": "The very fist post about GraphQL in Dgraph.",\n          "datePublished": "2019-10-30T00:00:00Z",\n          "author": {\n            "username": "Michael"\n          }\n        }\n      ]\n    }\n  }\n}\n')),Object(a.b)("p",null,"Authors can comment on posts, so let's also add a comment on that post.  "),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),"mutation addComment($comment: AddCommentInput!){\n  addComment(input: [$comment]) {\n    comment {\n      id\n      text\n      datePublished\n      author {\n        username\n      }\n      commentsOn {\n        text\n        author {\n          username\n        }\n      }\n    }\n  }\n}\n")),Object(a.b)("p",null,"Because posts have an auto generated ",Object(a.b)("inlineCode",{parentName:"p"},"ID"),", you need to make sure you link to the right post in the following variables."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "comment": {\n    "datePublished": "2019-10-30",\n    "text": "Wow, great work.",\n    "author": { "username": "Apoorv" },\n    "commentsOn": { "id": "0x4" }\n  }\n}\n')),Object(a.b)("p",null,"The mutation asks for more than just the mutated data, so the response digs deeper into the graph and finds the text of the post being commented on and the author."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "addComment": {\n      "comment": [\n        {\n          "id": "0x5",\n          "text": "Wow, great work.",\n          "datePublished": "2019-10-30T00:00:00Z",\n          "author": {\n            "username": "Apoorv"\n          },\n          "commentsOn": {\n            "text": "The very fist post about GraphQL in Dgraph.",\n            "author": {\n              "username": "Michael"\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n')),Object(a.b)("p",null,"Mutations don't have to be just one new object, or just linking to existing objects.  A mutation can also add deeply nested data.  Let's add a new author and their first question as a single mutation."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  addAuthor(input: [\n    { \n      username: "Karthic",\n      questions: [\n        {\n          datePublished: "2019-10-30",\n          text: "How do I add nested data?"  \n        }\n      ]\n    }\n  ]) {\n    author {\n      username\n      questions {\n        id\n        text\n      }\n    }\n  }\n}\n')),Object(a.b)("p",null,"We don't need say who the author of the question is this time - Dgraph works it out from the ",Object(a.b)("inlineCode",{parentName:"p"},"@hasInverse")," directive in the schema."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "addAuthor": {\n      "author": [\n        {\n          "username": "Karthic",\n          "questions": [\n            {\n              "id": "0x6",\n              "text": "How do I add nested data?"\n            }\n          ]\n        }\n      ]\n    }\n  }\n}\n')),Object(a.b)("p",null,'Notice how the structure of the input data for a mutation is just what you\'d have as an object model in your app.  There\'s no special edges, no internal "add", or "link" in those deep mutations.  You don\'t have to build a special object to make mutations; you can just serialize the model you are using in your program and send it back to Dgraph.  '),Object(a.b)("p",null,"It even works if you send too much data.  Let's say your app is making an update where an author is answering the question above.  It'll use the ",Object(a.b)("inlineCode",{parentName:"p"},"addAnswer")," mutation.  "),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),"mutation addAnswer($answer: AddAnswerInput!){\n  addAnswer(input: [$answer]) {\n    answer {\n      id\n      text\n    }\n  }\n}\n")),Object(a.b)("p",null,"In your app you've got the original question, you've built the answer and linked them in whatever way is right in your programming language, but when you serialize the answer, you'll get."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "answer": {\n    "text": "Don\'t worry deep mutations just work",\n    "author": { "username": "Michael" },\n    "inAnswerTo": { \n      "id": "0x6",\n      "text": "How do I add nested data?" \n    }\n  }\n}\n')),Object(a.b)("p",null,"It doesn't matter that the question data is repeated.  Dgraph works out that \"0x6\" is an existing post and links to it without trying to alter its existing contents.  So you can just serialize your client side data and you don't even have to strip out the extra data when linking to existing objects."),Object(a.b)("p",null,"Play around with it for a bit - add some authors and posts; there's also update and delete mutations you'll find by inspecting the schema.  Next, we'll see how to query data. "),Object(a.b)("h1",null,"Queries"),Object(a.b)("p",null,"For each type in the input schema, two kinds of queries get generated."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),"type Query {\n  ...\n  getAuthor(username: String!): Author\n  getPost(id: ID!): Post\n  ...\n  queryAuthor(filter: AuthorFilter, order: AuthorOrder, first: Int, offset: Int): [Author]\n  queryPost(filter: PostFilter, order: PostOrder, first: Int, offset: Int): [Post]\n  ...\n}\n")),Object(a.b)("p",null,"The get queries grab a single object by ID, while query is where Dgraph added the search capability it built from the ",Object(a.b)("inlineCode",{parentName:"p"},"@search")," directives in the schema."),Object(a.b)("p",null,"Because the username is an author's ID, ",Object(a.b)("inlineCode",{parentName:"p"},"getAuthor")," takes as input the username to find.  Posts use the auto generated ID and so ",Object(a.b)("inlineCode",{parentName:"p"},"getPost")," takes that as input."),Object(a.b)("p",null,"The filters in ",Object(a.b)("inlineCode",{parentName:"p"},"AuthorFilter")," and ",Object(a.b)("inlineCode",{parentName:"p"},"PostFilter")," are generated depending on what fields had an ",Object(a.b)("inlineCode",{parentName:"p"},"@search")," directive in the schema.  The possible orderings in ",Object(a.b)("inlineCode",{parentName:"p"},"order")," are worked out from the types of the fields.  And ",Object(a.b)("inlineCode",{parentName:"p"},"first")," and ",Object(a.b)("inlineCode",{parentName:"p"},"offset")," let you paginate results."),Object(a.b)("p",null,"Getting an author by their id is just"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),'query {\n  getAuthor(username: "Karthic") { \n    username \n    questions { text }\n  }\n}\n')),Object(a.b)("p",null,"For a post it's"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),'query {\n  getPost(id: "0x4") {\n    text\n    author {\n      username\n    }\n  }\n}\n')),Object(a.b)("p",null,"Query ",Object(a.b)("inlineCode",{parentName:"p"},"queryAuthor")," works by applying any ",Object(a.b)("inlineCode",{parentName:"p"},"filter"),", ",Object(a.b)("inlineCode",{parentName:"p"},"order")," or pagination, and if none are given, it's just a search for things of that type.  For example, get all authors with:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),"query {\n  queryAuthor {\n    username\n    answers {\n      text\n    }\n    questions {\n      text\n    }\n  }\n}\n")),Object(a.b)("p",null,"Or sort the authors alphabetically by name and get the first 5."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),"query {\n  queryAuthor(order: { asc: username }, first: 5) {\n    username\n  }\n}\n")),Object(a.b)("p",null,"More interesting is querying posts.  In the app, you'd perhaps add a search field to the UI and maybe allow search for matching questions.  Here's how you'd get the latest 10 questions that mention GraphQL."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),'query {\n  queryPost(filter: { text: { anyoftext: "GraphQL"}}, order: { desc: datePublished }, first: 10) {\n    text\n    author {\n      username\n    }\n  }\n}\n')),Object(a.b)("p",null,"The query options also work deeper in queries.  So you can, for example, also find the most recent post of each author."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),'query {\n  queryPost(filter: { text: { anyoftext: "GraphQL"}}, order: { desc: datePublished }, first: 10) {\n    text\n    author {\n      username\n      questions(order: { desc: datePublished }, first: 1) {\n        text\n        datePublished\n      }\n    }\n  }\n}\n')),Object(a.b)("h1",null,"Updating the App"),Object(a.b)("p",null,"You've got v1 of your App working.  So you'll start iterating on your design an improving it.  Now you want authors to be able to tag questions and search for questions that have particular tags."),Object(a.b)("p",null,"Dgraph makes this easy.  You can just update your schema and keep working."),Object(a.b)("p",null,"That'll be updating the definition of Question to"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),"type Question implements Post {\n  answers: [Answer]\n  tags: [String!] @search(by: [term])\n}\n")),Object(a.b)("p",null,"So the full schema becomes"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),"type Author {\n  username: String! @id @search(by: [hash])\n  questions: [Question] @hasInverse(field: author)\n  answers: [Answer] @hasInverse(field: author)\n}\n\ninterface Post {\n  id: ID!\n  text: String @search(by: [fulltext])\n  datePublished: DateTime @search\n  author: Author!\n}\n\ntype Question implements Post {\n  answers: [Answer]\n  tags: [String!] @search(by: [term])\n}\n\ntype Answer implements Post {\n  inAnswerTo: Question!\n}\n\ntype Comment implements Post {\n  commentsOn: Post!\n}\n")),Object(a.b)("p",null,"Update the schema as you did before and Dgraph will adjust to the new schema."),Object(a.b)("p",null,'But all those existing questions won\'t have tags, so let\'s add some.  How about we tag every question that contains "GraphQL" with the tag "graphql".  The ',Object(a.b)("inlineCode",{parentName:"p"},"updateQuestion")," mutation allows us to filter for the questions we want to update and then either ",Object(a.b)("inlineCode",{parentName:"p"},"set")," new values or ",Object(a.b)("inlineCode",{parentName:"p"},"remove")," existing values."),Object(a.b)("p",null,'The same filters that work for queries and mutations (update and delete) also work in mutation results, so we can update all the matching question to have the "graphql" tag, while returning a result that only contains the most recent such questions.'),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  updateQuestion(input: {\n    filter: { text: { anyoftext: "GraphQL" }},\n    set: { tags: ["graphql"]}\n  }) {\n    question(order: { desc: datePublished }, first: 10) {\n      text\n      datePublished\n      tags\n      author {\n        username\n      }\n    }\n  }\n}\n')))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-doc-example-mdx-6f77c38136dbc90cc18a.js.map