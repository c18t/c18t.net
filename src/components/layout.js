import * as React from 'react'
import { Link } from 'gatsby'
import {
  pageStyles,
  navLinks,
  navLinkItem,
  navLinkText,
  headingStyles
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={pageStyles}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/link" className={navLinkText}>Link</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={headingStyles}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout
