/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Aside from "./aside"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            author
            title
            subTitle
            subTitle2
          }
        }
      }
    `}
    render={data => (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: `42rem`,
          padding: `2.625rem 1.3125rem`,
        }}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <Aside
          author={data.site.siteMetadata.author}
          subTitle={data.site.siteMetadata.subTitle}
          subTitle2={data.site.siteMetadata.subTitle2}
        />
        <div>
          <main>{children}</main>
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
