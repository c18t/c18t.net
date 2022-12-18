import * as React from 'react';
import useSiteMetadata from './useSiteMetadata';

type SeoPageProps = {
  pageTitle?: string | null,
};

const Seo: React.FC<SeoPageProps> = ({ pageTitle }) => {
  const meta = useSiteMetadata();
  const title = meta.title;

  return (
    <title>{pageTitle ? `${pageTitle} | ${title}` : title}</title>
  );
};

export default Seo;
