export const quickStartMut1 = `mutation {
  addProduct(input: [{name: "GraphQL on Dgraph"}, {name: "Dgraph: The GraphQL Database"}]) {
    product {
      productID
      name
    }
  }
  addCustomer(input: [{username: "Michael"}]) {
    customer {
      username
    }
  }
}
`
export const quickStartMut2 = `mutation {
  addReview(input: [{by: {username: "Michael"}, about: {productID: "0x2"}, comment: "Fantastic, easy to install, worked great.  Best GraphQL server available", rating: 10}]) {
    review {
      comment
      rating
      by {
        username
      }
      about {
        name
      }
    }
  }
}
`
export const quickStartQry1 = `{
  queryReview(filter: {comment: {alloftext: "easy to install"}}) {
    comment
    by {
      username
    }
    about {
      name
    }
  }
}
`
export const quickStartQry2 = `{
  queryReview(filter: {comment: {alloftext: "best GraphQL"}, rating: {ge: 10}}) {
    comment
    by {
      username
    }
    about {
      name
    }
  }
}
`
export const quickStartQry3 = `{
  queryCustomer(filter: {username: {regexp: "/Mich.*/"}}) {
    username
    reviews(order: {asc: rating}, first: 5) {
      comment
      rating
      about {
        name
      }
    }
  }
}
`
export const exampleMut1 = `mutation {
  addAuthor(input: [{username: "Michael"}, {username: "Apoorv"}]) {
    author {
      username
    }
  }
}
`
export const exampleMut2 = `mutation addQuestion($question: AddQuestionInput!) {
  addQuestion(input: [$question]) {
    question {
      id
text
      datePublished
      author {
        username
      }
    }
  }
}
`
export const exampleMut2Vars = `{
  "question": {
    "datePublished": "2019-10-30",
    "text": "The very fist post about GraphQL in Dgraph.",
    "author": { "username": "Michael" }
  }
}
`
export const exampleMut3 = `mutation addComment($comment: AddCommentInput!) {
  addComment(input: [$comment]) {
    comment {
      id
      text
      datePublished
      author {
        username
      }
      commentsOn {
        text
        author {
          username
        }
      }
    }
    }
}
`
export const exampleMut3Vars = `{
  "comment": {
    "datePublished": "2019-10-30",
    "text": "Wow, great work.",
    "author": { "username": "Apoorv" },
    "commentsOn": { "id": "0x4" }
  }
}
`
export const exampleMut4 = `mutation {
  addAuthor(input: [{username: "Karthic", questions: [{datePublished: "2019-10-30", text: "How do I add nested data?"}]}]) {
    author {
      username
      questions {
        id
        text
      }
    }
  }
}
`
export const exampleMut5 = `mutation addAnswer($answer: AddAnswerInput!){
  addAnswer(input: [$answer]) {
    answer {
      id
      text
    }
  }
}
`
export const exampleQry1 = `{
  getAuthor(username: "Karthic") {
    username
    questions {
      text
    }
  }
}
`
export const exampleQry2 = `{
  getPost(id: "0x4") {
    text
    author {
      username
    }
  }
}
`
export const exampleQry3 = `{
  queryAuthor {
    username
    answers {
      text
    }
    questions {
      text
    }
  }
}
`
