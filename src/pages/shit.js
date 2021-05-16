import React from 'react'
import {Link,useStaticQuery,graphql} from 'gatsby'
import Layout from '../maincomponents/Layout'
import Dump from '../components/Dump';


function Shit() {
  const data = useStaticQuery(graphql`
  query SITE_INDEX_SHIT {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
          featured
        }
      }
    }
  }
`)
  return (
    <>
      <Layout>
        <Dump data={data} />
        {data.allMdx.nodes.map(({ excerpt, frontmatter }) => (
          <>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <p>{excerpt}</p>
            <p>{frontmatter.tags}</p>
          </>
        ))}
      </Layout>
    </>
  )
}

export default Shit
