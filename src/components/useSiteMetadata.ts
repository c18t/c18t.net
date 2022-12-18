import { graphql, useStaticQuery } from 'gatsby';

type SiteMetaData = {
  title: string,
};

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return data.site.siteMetadata as SiteMetaData;
};

export default useSiteMetadata;
