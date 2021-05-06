import React from 'react'
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from '../maincomponents/Layout'
import AboutPage from '../PageContent/AboutPage'

const desktop=
  <Layout>
    <Parallax pages={1.8}>
      <AboutPage offset={0} factor={1.8}/>
    </Parallax>
  </Layout>

const mobile=
  <Layout>
    <Parallax pages={4.50}>
      <AboutPage offset={1} factor={2.5}/>
    </Parallax>
  </Layout>


class About extends React.Component{
  render(){
    let width = window.innerWidth;
     if (width > 900) {
       return (
         desktop
       );
     } else {
       return (
         mobile
       );
     }
  }
}

export default About








