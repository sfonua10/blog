import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      display: `flex`,
      justifyContent: `spaceBetween`,
      alignItems: `center`,
      marginBottom: `2.625rem`
    }}
  >
    <h1
      style={{
        fontSize: `1.98818rem`,
        lineHeight: `2.625rem`,
        marginBottom: `0`,
        marginTop: `0`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `black`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
