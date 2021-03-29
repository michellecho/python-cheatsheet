import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Prism from 'prismjs'
import { useEffect } from "react"

export const query = graphql`
  {
    allDataJson {
      edges {
        node {
          id
          topic
          functions {
            name
            input
            output
          }
        }
      }
    }
  }
`;


const IndexPage = ({ data }) => {
  useEffect(() => {
    Prism.highlightAll()
  })
  
  return (
    <Layout>
      <SEO title="Python Cheatsheet"/>

      {data.allDataJson.edges.map(({node: item}) => (
        <div key={item.id}>
          <p class="topic">{item.topic}</p>
          <ul>
            {item.functions.map((func) => (
              <li>
                <div class="description">{func.name}</div>
                <div class="code-block">
                  <p class="input-head">&nbsp;In:</p>
                  <p class="input-code">
                    <pre>
                      <code className="language-python" dangerouslySetInnerHTML={{ __html: func.input }}></code>
                    </pre>
                  </p>
                </div>
                <div class="code-block">
                  <p class="output-head">Out:</p>
                  <p class="output-code">
                    <pre>
                      <code className="language-python" dangerouslySetInnerHTML={{ __html: func.output }}></code>
                    </pre>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Layout>
  )
};

export default IndexPage
