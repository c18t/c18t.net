import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const ArticlePage = ({ data }) => {
  return (
    <Layout pageTitle="Articles">
      <ul>
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/article/${node.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: slug, order: DESC}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        id
        slug
      }
    }
  }
`

export default ArticlePage
