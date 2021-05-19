import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
    query SITE_METADATA_QUERY {
      site {
        siteMetadata {
          author
          defaultLanguage
          description
          url
          pages {
            aboutme
            contact
            home
            resume
          }
          social {
            facebook
            github
            instagram
            linkedn
            twitter
          }
          title
          type
        }
      }
    }
    `
  );
  return site.siteMetadata;
};