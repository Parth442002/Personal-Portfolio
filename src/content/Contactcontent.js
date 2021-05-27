/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'
import ContactSVG from '../assets/illustrations/ContactSVG'
import { Fade, Zoom } from "react-awesome-reveal"
import Button from "../components/Button"
import '../styles/FontsContent.css'

function ContactContent(){
  return (
    <section className="pt-20 md:pt-40 mb-20">
      <div className="container mx-auto px-8 lg:flex">
        <div className="lg:w-1/2 mr-5">
          <Fade direction='left'>
            <ContactSVG />
          </Fade>
        </div>
        <div className="text-center lg:text-left lg:w-1/2">
          <Zoom>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-none my-8"
          style={{
            fontFamily:['Raleway','sans serif']
          }}
          >
            Contact Me
          </h1>
          </Zoom>
          <Fade direction='right'
          style={{
            fontFamily:['Varela Round','Comfortaa','sans serif']
            }}
          >
            <p className="text-xl lg:text-2xl mt-6 font-light mb-7">
            Do you have an amazing idea for an app or a website? or do you want to talk about tech and software development in general?  If the answer is yes to any of those questions then, click the button down below.
            </p>
            <Button target={'/contact'} value={'Contact Me'} />
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default ContactContent