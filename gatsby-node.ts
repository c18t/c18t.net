import type { GatsbyNode } from 'gatsby'
import { resolve } from 'path'
const postTemplate = resolve(`./src/components/articlePost.tsx`);

const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter
}) => {
  const { createPage } = actions;

  const result = await graphql(`
    query GatsbyNode {
      allMdx {
        nodes {
          id
          internal {
            contentFilePath
          }
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  `) as { errors?: any, data: Queries.GatsbyNodeQuery };

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  // Create blog post pages.
  const posts = result.data.allMdx.nodes

  // you'll call `createPage` for each result
  posts.forEach(node => {
    const articlePath = (node.parent as { name: string }).name;
    createPage({
      // As mentioned above you could also query something else like frontmatter.title above and use a helper function
      // like slugify to create a slug
      path: `/article/${articlePath}`,
      // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    });
  });
};

export { createPages };
