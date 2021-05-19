/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import {Fade} from 'react-awesome-reveal'
import HeroOffice from '../assets/illustrations/HeroOffice'
import HeroCoffee from '../assets/illustrations/HeroCoffee'
import '../styles/FontsContent.css'

const HeroContent = () => {
  return(
  <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <Fade direction='left'>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold  my-8"
            style={{
              fontFamily:['Raleway','sans serif']
            }}
            >
              Hi, I'm Parth Katiyar
            </h1>
          </Fade>
          <Fade direction='left'
          style={{
            fontFamily:['Varela Round','Comfortaa','sans serif']
          }}
          >
            <p className="text-lg lg:text-2xl mt-6 font-light">
            I am a tech enthusiast who is also interested in making beautiful websites and mobile apps.
            </p>
          </Fade>
        </div>
          <div className="lg:w-1/2 sm:mt-5">
            <Fade direction='right'>
                <HeroOffice />
            </Fade>
          </div>
      </div>
    </section>
  )
}

export default HeroContent


