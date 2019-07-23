import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Aside = ({ author, subTitle, subTitle2 }) => (
  <aside>
    <div
      style={{
        display: `flex`,
        marginBottom: `3.5rem`,
      }}
    >
      <img
        src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/16864323_10208493662208269_7320560127680434336_n.jpg?_nc_cat=105&_nc_oc=AQn9Q_AombMK1wzXK30UBYJc-l-rgg7aLVLf-kdT69mEcrrCUlslyeAPkQI_9tDpSnZPr0D6qPKpOP_sWRrZpbzT&_nc_ht=scontent-sjc3-1.xx&oh=6eebdbf529545085a164eeb477c11bb9&oe=5DA33BEC"
        style={{
          marginRight: `0.875rem`,
          marginBottom: `0`,
          width: `3.5rem`,
          height: `3.5rem`,
          borderRadius: `50%`,
        }}
      />
      <p style={{ maxWidth: `310px` }}>{subTitle}<a href="https://twitter.com/saiafonua">{author}</a><br/>{subTitle2}</p>
    </div>
  </aside>
)

Aside.propTypes = {
  subTitle: PropTypes.string,
  subTitle2: PropTypes.string
}

Aside.defaultProps = {
  subTitle: ``,
  subTitle2: ``
}

export default Aside
