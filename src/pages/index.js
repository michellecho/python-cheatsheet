import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { func } from "prop-types"

export const query = graphql`
  {
    allDataJson {
      edges {
        node {
          id
          topic
          functions {
            input
            name
            output
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Python Cheatsheet"/>
      
      {data.allDataJson.edges.map(({node: item}) => (
        <div key={item.id}>
          <p class="topic">{item.topic}</p>
          <ul>
            {item.functions.map((func) => (
              <li>
                <p class="description">{func.name}</p>
                <p class="input">{func.input}</p>
                <p class="output">{func.output}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Layout>
  )
};

export default IndexPage
