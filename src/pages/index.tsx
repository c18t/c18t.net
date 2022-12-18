import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Seo from '../components/seo';

const paragraphStyles = {
  marginBottom: 48,
};

export const Head: HeadFC = () => <Seo />;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <p style={paragraphStyles}>Hello world.</p>
      <StaticImage
        src="../images/c18t.png"
        alt="It's me!"
      ></StaticImage>
    </Layout>
  );
};

export default IndexPage;
