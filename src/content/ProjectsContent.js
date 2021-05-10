/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

import { useStaticQuery, graphql } from "gatsby"
import {Bounce, Fade,Zoom} from 'react-awesome-reveal'


import ProjectCard from '../components/Projectcard'

const ProjectContent = () =>{

  return(
    <section className=''>
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

      <ul className='mt-10 mx-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 md:gap-x-10 md:gap-y-10 p-5'>

            <ProjectCard
              title="Freiheit"
              link="https://www.behance.net/gallery/58937147/Freiheit"
              bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
            >
              This project is my entry to Adobe's #ChallengeYourPerspective contest.
            </ProjectCard>

            <ProjectCard
              title="Harry Potter"
              link="https://www.behance.net/gallery/52915793/Harry-Potter"
              bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
            >
              I entered the DOCMA 2017 award with this Harry Potter inspired image.
            </ProjectCard>

            <ProjectCard
              title="Tomb Raider"
              link="https://www.behance.net/gallery/43907099/Tomb-Raider"
              bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
            >
              Recreation of a Tomb Raider Wallpaper (Fan Art)
            </ProjectCard>

            <ProjectCard
              title="Eagle"
              link="https://www.behance.net/gallery/38068151/Eagle"
              bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
            >
              A fantasy image manipulation relocating the habitat of wild animals.
            </ProjectCard>

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