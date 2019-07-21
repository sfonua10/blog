import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { graphql } from "gatsby"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <div>
      <Layout>
        <hr />
        <h1>{post.frontmatter.title}</h1>
        <h4>
          Posted by {post.frontmatter.author} on {post.frontmatter.date}{" "}
        </h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Link to="/blog">Go Back</Link>
      </Layout>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
