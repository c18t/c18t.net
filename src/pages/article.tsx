import * as React from 'react';
import { HeadFC, Link, PageProps, graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const pageTitle = "Articles";

export const query = graphql`
  query ArticlePage {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        id
        excerpt
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        parent {
          ...on File {
            name
          }
        }
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo pageTitle={pageTitle} />;

const ArticlePage: React.FC<PageProps<Queries.ArticlePageQuery>> = ({ data }) => {
  return (
    <Layout pageTitle={pageTitle}>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/article/${(node.parent as { name: string }).name}`}>
                {node.frontmatter?.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter?.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  );
};

export default ArticlePage;
