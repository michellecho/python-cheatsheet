import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => {
  const siteInfo = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          author
        }
      }
    }
  `)

  return (
    <>
      <header>
        <h1>{siteInfo.site.siteMetadata.title}</h1>
      </header>
      <div>
        <main>{children}</main>
      </div>
      <footer>
        © {new Date().getFullYear()}, Built by <a href="http://michellecho.me">{siteInfo.site.siteMetadata.author}</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
