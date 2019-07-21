import React from "react"
import Link from "gatsby-link"

const Menu = () => (
  <div
    style={{
      background: "#f4f4f4",
      paddingTop: "10px",
    }}
  >
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
        maxWidth: 650,
        margin: `0 auto`,
      }}
    >
      <li>
        <Link to="/">God</Link>
      </li>
      <li>
        <Link to="/about">Wife</Link>
      </li>
      <li>
        <Link to="/services">Career</Link>
      </li>
      <li>
        <Link to="/blog">Calling</Link>
      </li>
    </ul>
  </div>
)

export default Menu
