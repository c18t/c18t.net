import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  pageStyles,
  siteTitle,
  navLinks,
  navLinkItem,
  navLinkText,
  headingStyles
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  var titleText = data.site.siteMetadata.title
  if (pageTitle) titleText = `${pageTitle} | ${titleText}`
  const h1Text = pageTitle || data.site.siteMetadata.title

  return (
    <div className={pageStyles}>
      <title>{titleText}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/link" className={navLinkText}>Links</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/article" className={navLinkText}>Articles</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={headingStyles}>{h1Text}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout
