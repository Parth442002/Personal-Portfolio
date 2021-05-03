import React from 'react'
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from '../maincomponents/Layout'
import AboutPage from '../PageContent/AboutPage'

const About = () => (
  <Layout>
    <Parallax pages={3}>
      <AboutPage offset={0} factor={3}/>
    </Parallax>
  </Layout>
)

export default About

