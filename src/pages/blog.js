import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const BlogPage = ({ data }) => (
  <div
    style={{
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: `42rem`,
      padding: `2.625rem 1.3125rem`,
    }}
  >
    <Layout>
      {data.allMarkdownRemark.edges.map(post => (
        <article
          style={{
            cursor: "pointer",
          }}
        >
          <header>
            <h3 key={post.node.id} style={{fontFamily: `Montserrat, sanSerif`,
              fontSize: `1.75rem`,
              fontWeight: 900,
              marginBottom: `0.4375rem`,
              marginTop: `3.5rem`}}>
              <Link to={post.node.frontmatter.path} style={{color:`#0074D9`}}>
                {post.node.frontmatter.title}
              </Link>
            </h3>
            <small>
              {post.node.frontmatter.author} | {post.node.frontmatter.date}
            </small>
            {post.node.frontmatter.description}
          </header>
        </article>
      ))}
    </Layout>
  </div>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default BlogPage
