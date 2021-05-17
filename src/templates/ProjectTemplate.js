import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Dump from '../components/Dump';
import { Layout } from '../maincomponents/Layout';

function ProjectTemplate ({ data, pageContext }) {
  return(

  );
};

export default ProjectTemplate

export const Projectquery = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
        tags
      }
    }
  }
`;

/*
const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <h5>{frontmatter.tags}</h5>
      <MDXRenderer>{body}</MDXRenderer>
      {previous === false ? null : (
        <>
          {previous && (
            <Link to={previous.fields.slug}>
              <p>{previous.frontmatter.title}</p>
            </Link>
          )}
        </>
      )}
      {next === false ? null : (
        <>
          {next && (
            <Link to={next.fields.slug}>
              <p>{next.frontmatter.title}</p>
            </Link>
          )}
        </>
      )}
    </Layout>
*/