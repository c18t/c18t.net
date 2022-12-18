import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const listStyles = {
  marginBottom: 12,
};

const pageTitle = "Links";

export const Head: HeadFC = () => <Seo pageTitle={pageTitle} />;

const LinkPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle={pageTitle}>
      <ul>
        <li style={listStyles}><a href="https://twitter.com/c18t">@c18t</a></li>
      </ul>
    </Layout>
  );
};

export default LinkPage;
