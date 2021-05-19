/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'
import AboutSVG from '../assets/illustrations/AboutSVG'
import AboutNew from '../assets/illustrations/AboutNew'
import Button from "../components/Button"
import {Fade,Zoom} from 'react-awesome-reveal'
import '../styles/FontsContent.css'


function Aboutcontent() {
  return (
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2 space-y-6">
          <Zoom>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-none my-8"
            style={{
              fontFamily:['Raleway','sans serif']
            }}
            >
              About Me
            </h1>
          </Zoom>
          <Fade direction='left'
          style={{
            fontFamily:['Varela Round','Comfortaa','sans serif']
          }}
          >
            <p className="text-xl lg:text-2xl mt-6 font-light">
            The English language can not fully capture the depth and complexity of my thoughts. So I'm incorporating Emoji into my speech to better express myself. Winky face.
            </p>
            <Button value={"About Me"} target='/about'/>
          </Fade>
        </div>
        <div className="lg:w-1/2 ml-8 mt-20">
          <Fade direction='right'>
            <AboutNew />
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default Aboutcontent
