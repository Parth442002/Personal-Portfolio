import React from 'react'
import Hero from '../maincomponents/Hero'
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from '../maincomponents/Layout'
import Projects from '../maincomponents/Projects'
import About from '../maincomponents/About'
import Contact from '../maincomponents/Contact'
import { useStaticQuery,graphql } from 'gatsby'


const Index = () =>{
  const projectdata = useStaticQuery(graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 100)
        frontmatter {
          title
          date
          tags
        }
        fields {
          slug
        }
      }
    }
  }
`)

  return (
    <Layout>
      <Parallax pages={5}>
        <Hero offset={0} factor={1} />
        <Projects offset={1} factor={2} data={projectdata}/>
        <About offset={3} factor={1} />
        <Contact offset={4} factor={1}/>
        </Parallax>
    </Layout>
  )
}

export default Index
