/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

import { useStaticQuery, graphql } from "gatsby"
import {Bounce, Fade,Zoom} from 'react-awesome-reveal'
import ProjectCard from '../components/Projectcard'
import '../styles/FontsContent.css'



function ProjectContent({data}){
  return(
    <section className='w-full'>
      <Fade direction="left">
        <h1
        className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-none  my-8 mb-10 tracking-wider"
        style={{
          fontFamily:['Raleway','sans serif']
        }}
        >
          Projects
        </h1>
      </Fade>


      <ul className='mt-10 mx-5 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 md:gap-x-20 md:gap-y-20 p-2'>

        {data.allMdx.nodes.map(
            ({ id,frontmatter, fields }) => (
              <ProjectCard
                key={id}
                title={frontmatter.title}
                link={fields.slug}
                bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
                date={frontmatter.date}
                excerpt={frontmatter.excerpt}
                tags={frontmatter.tags}
                cover={frontmatter.cover.childImageSharp.fluid}
              />
            )
          )}
      </ul>

    </section>
  )
}

export default ProjectContent






/*

 <Fade direction='right'>
        <p
        className="text-xl lg:text-2xl mt-6 font-light"
        style={{
        fontFamily:['Varela Round','Comfortaa','sans serif']
        }}
        >
        These are some of my projects which range from ML-based applications to websites and more. These projects helped me in the deep understanding of their respective concepts and paradigms.
      </p>
      </Fade>

*/