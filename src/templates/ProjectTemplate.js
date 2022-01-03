
import React from 'react';
import { graphql} from 'gatsby';
import  Layout  from '../maincomponents/Layout';
import { Parallax } from "react-spring/renderprops-addons.cjs"
import ProjectBase from './ProjectBase'

function ProjectTemplate({data,pageContext}) {
  return (
    <Layout>
      <Parallax pages={1}>
        <ProjectBase offset={0} factor={1} data={data} pageContext={pageContext}/>
      </Parallax>
    </Layout>
  )
}

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

