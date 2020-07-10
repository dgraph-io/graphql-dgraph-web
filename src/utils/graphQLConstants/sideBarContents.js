import { Images } from "../../images/index.js"

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
      subTitle: "All the nitty-gritty details about GraphQL with Dgraph.",
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
