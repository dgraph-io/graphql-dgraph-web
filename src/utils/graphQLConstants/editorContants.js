import React from "react"
import GraphiQLWrapper from "../../components/GraphiQL"
import StepOne from "../../components/quick-start-step1.mdx"

export const editorConstants = [
         {
           text: (
             <div>
               For GraphQL in Dgraph, you just concentrate on defining the
               schema of your graph and how you'd like to search that graph;
               Dgraph does the rest. You work only with GraphQL and, think in
               terms of the graph that matters for your app.
               <div>
                 This example is for an app about customers, products and
                 reviews. That's a pretty simple graph, with just three types of
                 objects, but it has some interesting connections for us to
                 explore.{" "}
               </div>
               <div>Here's a schema of GraphQL types for that:</div>
             </div>
           ),
    CustomComponent: () => {
             return (
               <>
                <StepOne />
               </>
             )
           },
         },
         {
           text: (
             <span>
               It's a one-liner to bring up Dgraph with GraphQL.{" "}
               <i>
                 Note: The Dgraph standalone image is great for quick start and
                 exploring, but it's not meant for production use. Once you want
                 to build an App or persist your data for restarts, you'll need
                 to review the <u>admin docs.</u>
               </i>
             </span>
           ),
           CustomComponent: () => {
             return (
               <>
                 <GraphiQLWrapper />
               </>
             )
           },
         },
         {
           text: (
             <span>
               It's a one-liner to bring up Dgraph with GraphQL.{" "}
               <i>
                 Note: The Dgraph standalone image is great for quick start and
                 exploring, but it's not meant for production use. Once you want
                 to build an App or persist your data for restarts, you'll need
                 to review the <u>admin docs.</u>
               </i>
             </span>
           ),
           CustomComponent: () => {
             return (
               <>
                 <GraphiQLWrapper />
               </>
             )
           },
         },
       ]
