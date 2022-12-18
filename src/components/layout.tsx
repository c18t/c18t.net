import * as React from 'react';
import { Link } from 'gatsby';
import {
  pageStyles,
  siteTitle,
  navLinks,
  navLinkItem,
  navLinkText,
  headingStyles
} from './layout.module.css';
import useSiteMetadata from './useSiteMetadata';

interface LayoutProps {
  pageTitle?: string | null,
  children?: React.ReactNode,
};

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  const data = useSiteMetadata();
  let title = data.title;
  let h1Text = title;
  if (pageTitle) h1Text = pageTitle;

  return (
    <div className={pageStyles}>
      <header className={siteTitle}>{title}</header>
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
  );
};

export default Layout;
