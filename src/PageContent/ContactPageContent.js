/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import {Bounce, Fade,Zoom,AttentionSeeker} from 'react-awesome-reveal'
import ContactSVG from '../assets/illustrations/ContactSVG'
import Button from "../components/Button"
import Profiletab from '../components/Profiletab'
import {GrFacebook, GrGithub, GrInstagram, GrLinkedin, GrTwitter,GrLocation} from 'react-icons/gr'
import {IoCalendarOutline,IoLocationOutline,IoMailOutline} from 'react-icons/io5'
import styled from 'styled-components'
import Formsvg from '../images/Formsvg'

function ContactPageContent() {
  const imgadd='https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg'
  return (
    <section className="pt-20 md:pt-40 mt-20 bg-transparent opacity-90 mx-20">
      <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-none  mt-3 mb-20">
          Contact Me
        </h1>
      <div className="container mx-auto px-8 lg:flex text-right">

      </div>
    </section>
  )
}

export default ContactPageContent


/*
<Fade direction='right'>
            <p className="text-lg lg:text-xl mt-6 font-light mb-7">
            Hello !! My name is Rolwin Reevan Monteiro. I'm a full stack web developer who is passionate about various web technologies. I like to experiment with different web technologies. I have an experience of nearly 3 years working with LAMP stack, MERN stack and ELK stack. Building fancy UI's just like this one that your seeing 😅 and writing blogs about tech stacks is what Rolwin loves to do. Check my blog which I update every week for some Javascript and some cool notes on web technologies.
            </p>
            <p className="text-lg lg:text-xl mt-6 font-light mb-7">
            Currently I work mostly with Javascript technologies like ReactJS and NodeJS. I also have hands on experience working with cloud infrastructures like AWS/GCP and have deployed applications keeping scalability in mind.
            </p>
            <ul className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-8  p-5'>
              <Profiletab/>
              <Profiletab/>
              <Profiletab/>
              <Profiletab/>
              <Profiletab/>
              <Profiletab/>
            </ul>
          </Fade>
*/
