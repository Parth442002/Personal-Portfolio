/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

import { useStaticQuery, graphql } from "gatsby"
import {Bounce, Fade,Zoom} from 'react-awesome-reveal'
import ProjectCard from '../components/Projectcard'




function ProjectContent({data}){
  return(
    <section className='w-full'>
      <Bounce>
        <h1
        className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-none  my-8">
          Projects
        </h1>
      </Bounce>
      <p
      className="text-xl lg:text-2xl mt-6 font-light">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>

      <ul className='mt-10 mx-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 md:gap-x-20 md:gap-y-20 p-5'>

        {data.allMdx.nodes.map(
            ({ id, excerpt, frontmatter, fields }) => (
              <ProjectCard
                key={id}
                title={frontmatter.title}
                link={fields.slug}
                bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
                date={frontmatter.date}
                excerpt={excerpt}
                tags={frontmatter.tags}
              />
            )
          )}
      </ul>

    </section>
  )
}

export default ProjectContent






/*

<PostWrapper key={id}>
              <Link to={fields.slug}>
                <h1>{frontmatter.title}</h1>
                <p>{frontmatter.date}</p>
                <p>{excerpt}</p>
              </Link>
            </PostWrapper>


<section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center ">
          <Fade direction='left'>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-none my-8">
              Projects
            </h1>
          </Fade>
          <Fade direction='left'>
            <div>

            </div>
            <p className="text-xl lg:text-2xl mt-6 font-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </Fade>
        </div>
      </div>
    </section>
*/