import * as React from 'react'
import { HeadFC, graphql, PageProps } from 'gatsby'
import Layout from './layout'
import Seo from './seo'

export const query = graphql`
  query ArticlePostPage($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      parent {
        ... on File {
          name
        }
      }
    }
  }
`

export const Head: HeadFC<Queries.ArticlePostPageQuery> = ({ data }) => {
  return (
    <Seo pageTitle={data.mdx?.frontmatter?.title} />
  );
}

const ArticlePost: React.FC<PageProps<Queries.ArticlePostPageQuery>> = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx?.frontmatter?.title}>
      <p>{data.mdx?.frontmatter?.date}</p>
      {children}
    </Layout>
  )
}

export default ArticlePost
