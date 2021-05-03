/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import {Bounce, Fade,Zoom} from 'react-awesome-reveal'
import ContactSVG from '../assets/illustrations/ContactSVG'
import Button from "../components/Button"
import Profiletab from '../components/Profiletab'

function AboutPageContent() {
  const imgadd='https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg'
  return (
    <section className="pt-20 md:pt-40 mt-50 bg-transparent opacity-90">
      <div className="container mx-auto px-8 lg:flex">
        <div className="lg:w-1/3 mr-3">
          <Fade direction='left'>
            <img src={imgadd} height='200' width='200' className='
             rounded-3xl '/>
            <h3 className="text-xl lg:text-2xl mt-3 font-light mb-7">
              Parth Katiyar
            </h3>
            <p className="text-xl lg:text-2xl mt-3 font-light mb-7 ">
              Date Of Birth
            </p>
            <div className='flex flex-row space-x-3  mt-3 '>
              <i>Icon1</i>
              <i>Icon1</i>
              <i>Icon1</i>
              <i>Icon1</i>
            </div>
            <p className="text-xl lg:text-2xl mt-3 font-light mb-7 ">
              Lucknow
            </p>
          </Fade>
        </div>
        <div className="text-center lg:text-left lg:w-2/3">
          <Zoom>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-none my-3">
            Contact Me
          </h1>
          </Zoom>
          <Fade direction='right'>
            <p className="text-lg lg:text-xl mt-6 font-light mb-7">
            Hello !! My name is Rolwin Reevan Monteiro. I'm a full stack web developer who is passionate about various web technologies. I like to experiment with different web technologies. I have an experience of nearly 3 years working with LAMP stack, MERN stack and ELK stack. Building fancy UI's just like this one that your seeing 😅 and writing blogs about tech stacks is what Rolwin loves to do. Check my blog which I update every week for some Javascript and some cool notes on web technologies.
            </p>
            <p className="text-lg lg:text-xl mt-6 font-light mb-7">
            Currently I work mostly with Javascript technologies like ReactJS and NodeJS. I also have hands on experience working with cloud infrastructures like AWS/GCP and have deployed applications keeping scalability in mind. Docker, Kubernetes, Jenkins, SonarQube are some of the cool tools I use for CI/ CD. I'm always a learner and a self taught programmer.
            </p>

          </Fade>
        </div>
      </div>
    </section>
  )
}

export default AboutPageContent



