import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `c18t.net`,
    siteUrl: `https://c18t.net`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  // https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/#trailingslash
  trailingSlash: "never",
  plugins: [
    "gatsby-plugin-google-gtag",
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "article",
        "path": `${__dirname}/article`,
      },
    },
  ]
};

export default config;
