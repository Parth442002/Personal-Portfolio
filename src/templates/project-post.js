import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { Layout } from '../maincomponents/Layout';

export default ({ data }) => {
  const { frontmatter, body } = data.mdx;
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`;



/*
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from '../maincomponents/Layout'
import BlogPage from '../PageContent/BlogPage'

const desktop=
  <Layout>
    <Parallax pages={1.8}>
      <BlogPage offset={0} factor={1.8}/>
    </Parallax>
  </Layout>

const mobile=
  <Layout>
    <Parallax pages={4.50}>
      <BlogPage offset={1} factor={2.5}/>
    </Parallax>
  </Layout>


class Blog extends React.Component{
  render(){
    let width = window.innerWidth;
     if (width > 900) {
       return (
         desktop
       );
     } else {
       return (
         mobile
       );
     }
  }
}

export default Blog

*/
