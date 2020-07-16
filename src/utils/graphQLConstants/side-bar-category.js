import { Images } from "../../images/index.js"

export const categoryClassName={
    slashGraph:'Slash GraphQL',
    dgraphQl:'Dgraph GraphQL',
    docs:'Documentation Reference',
    tutorials:'Tutorials',
    tools:'Tools and Deployment',
    examples:'Example Apps'
}
export const paths = {
    slashGraph:'slash-graphql',
    dgraphQl:'dgraph-graphql',
    docs:'doc',
    tutorials:'tutorials',
    tools:'recipes',
    examples:'example-apps'
}

export const sideBarContentClasses = [
  [
    {
      title: "Slash GraphQL",
      subTitle: "Dgraph GraphQL in a manger cloud service.",
      icon: Images.vector,
      stage:'BETA',
      showSideBar: false,
    },
    {
      title: "Documentation Reference",
      subTitle: "All the nitty-gritty details about Dgraph GraphQL.",
      icon: Images.clone,
      showSideBar: false,
    },
    {
      title: "Example Apps",
      subTitle:
        "We build lots of GraphQL apps, here are some examples we’ve built over time.",
      icon: Images.folder_open,
      showSideBar: true,
    },
  ],
  [
    {
      title: "Dgraph GraphQL",
      subTitle: "Learn about GraphQL and Dgraph.",
      icon: Images.union,
      showSideBar: false,
    },
    {
      title: "Tutorials",
      subTitle:
        "Step by step tutorials on how to build an app in any framework.",
      icon: Images.book_open,
      showSideBar: true,
    },
  
    
    {
      title: "Tools and Deployments",
      subTitle:
        "Other tools you might want to use with Dgraph and how to deploy apps.",
      icon: Images.wrench,
      showSideBar: true,
    }
  ]
]
