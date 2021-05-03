import React from 'react'
import Hero from '../maincomponents/Hero'
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from '../maincomponents/Layout'
import Projects from '../maincomponents/Projects'
import About from '../maincomponents/About'
import Contact from '../maincomponents/Contact'

const Index = () => (
  <Layout>
    <Parallax pages={5}>
      <Hero offset={0} factor={1} />
      <Projects offset={1} factor={2}/>
      <About offset={3} factor={1} />
      <Contact offset={4} factor={1}/>
    </Parallax>
  </Layout>
)

export default Index
