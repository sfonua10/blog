import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <div>
    <Layout>
      <h1>Latest Posts</h1>
      {data.allMarkdownRemark.edges.map(post => (
        <div style={{"border":"1px solid black","boxShadow":"1px 1px 0px #c2c2c2","cursor":"pointer"}}>
        <Link to={post.node.frontmatter.path}>{console.log(data)        }
          <div key={post.node.id}>
            <div style={{ fontSize: "1.125rem", marginBottom: "0.25rem" }}>
              {post.node.frontmatter.title}
            </div>
            <small>
              {post.node.frontmatter.author} | {post.node.frontmatter.date}
            </small>
            {post.node.frontmatter.description}
            <br />
            <br />
          </div>
        </Link>
        </div>
      ))}
    </Layout>
  </div>
)

export const relationshipWithGodQuery = graphql`
  query RelationshipWithGodQuery {
      allMarkdownRemark(skip:2) {
        edges {
          node {
            frontmatter {
              path
              title
              date
              author
            }
            excerpt
          }
        }
      }
  }
`;

export default IndexPage
