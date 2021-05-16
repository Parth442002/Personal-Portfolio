/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

import { useStaticQuery, graphql } from "gatsby"
import {Bounce, Fade,Zoom} from 'react-awesome-reveal'
import ProjectCard from '../components/Projectcard'




function ProjectContent(){
  const data = useStaticQuery(graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {published: {eq: true}}}
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
          tags
        }
      }
    }
  }
`)

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
      <div>
      {data.allMdx.nodes.map(({ excerpt, frontmatter }) => (
          <>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <p>{frontmatter.tags}</p>
            <p>{excerpt}</p>
          </>
        ))}
      </div>

      <ul className='mt-10 mx-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 md:gap-x-20 md:gap-y-20 p-5'>

            <ProjectCard
              title="Freiheit"
              link="./shit"
              bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
              date='Feb 2020'
              description="This project is my entry to Adobe's #ChallengeYourPerspective contest"
              tags={['Web Development','Django']}
            />

            <ProjectCard
              title="Harry Potter"
              link="https://www.behance.net/gallery/52915793/Harry-Potter"
              bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
              date='Feb 2020'
              description="This project is my entry to Adobe's #ChallengeYourPerspective contest"
              tags={['Web Development','Django']}
            />

            <ProjectCard
              title="Tomb Raider"
              link="https://www.behance.net/gallery/43907099/Tomb-Raider"
              bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
              date='Feb 2020'
              description="This project is my entry to Adobe's #ChallengeYourPerspective contest"
              tags={['Web Development','Django']}
            />

            <ProjectCard
              title="Eagle"
              link="https://www.behance.net/gallery/38068151/Eagle"
              bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
              date='Feb 2020'
              description="This project is my entry to Adobe's #ChallengeYourPerspective contest"
              tags={['Web Development','Django']}
            />

            </ul>

    </section>
  )
}

export default ProjectContent






/*
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