/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import HeroImage from '../components/HeroImage'
import { useStaticQuery, graphql } from "gatsby"
import {Bounce, Fade,Zoom} from 'react-awesome-reveal'
import HeroOffice from '../images/HeroOffice'
import HeroCoffee from '../images/HeroCoffee'

const HeroContent = () => {
  const data = useStaticQuery(graphql`
    query NonPageQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return(
  <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <Fade direction='left'>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none my-8">
              Hi, I'm Parth Katiyar
            </h1>
          </Fade>
          <Fade direction='left'>
            <p className="text-xl lg:text-2xl mt-6 font-light">
            I am a machine Learning enthusiast who is also interested in making beautiful websites and mobile apps.
            </p>
          </Fade>
        </div>
          <div className="lg:w-1/2">
            <Fade direction='right'>
                <HeroCoffee />
            </Fade>
          </div>
      </div>
    </section>
  )
}

export default HeroContent


