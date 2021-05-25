/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import {Fade} from 'react-awesome-reveal'
import HeroOffice from '../assets/illustrations/HeroOffice'
import HeroCoffee from '../assets/illustrations/HeroCoffee'
import Name from '../components/Logo/Name'
import '../styles/FontsContent.css'

const HeroContent = () => {
    let FinalSvg;
    let min = Math.ceil(1);
    let max = Math.floor(10);
    const ans =Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    if(ans % 2 == 0) {
      FinalSvg=<HeroOffice/>
    }
    else {
      FinalSvg=<HeroCoffee/>
    }

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
              Hi, I'm <spam className='text-blue-500'>Parth Katiyar</spam>
            </h1>
          </Fade>
          <Fade direction='left'
          style={{
            fontFamily:['Varela Round','Comfortaa','sans serif']
          }}
          >
            <p className="text-lg lg:text-2xl mt-6 font-light tracking-wide">
            I am a technophile who is interested in making beautiful websites and ML powered applications.
            </p>
          </Fade>
        </div>
          <div className="lg:w-1/2 sm:mt-5">
            <Fade direction='right'>
              {FinalSvg}
            </Fade>
          </div>
      </div>
    </section>
  )
}

export default HeroContent



/*
I am a technophile who is interested in everything related to technology ranging from making stellar websites to machine learning-powered applications.



*/