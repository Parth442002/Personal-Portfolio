import React from 'react'
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from '../maincomponents/Layout'
import AboutPage from '../PageContent/AboutPage'

const desktop=
  <Layout>
    <Parallax pages={1.42}>
      <AboutPage offset={0} factor={1.5}/>
    </Parallax>
  </Layout>

const smallMobile=
  <Layout>
      <Parallax pages={5}>
        <AboutPage offset={1.8} factor={2}/>
      </Parallax>
  </Layout>

const mobile=
  <Layout>
    <Parallax pages={4}>
      <AboutPage offset={1.2} factor={2}/>
    </Parallax>
  </Layout>


class About extends React.Component{
  render(){
    let width = window.innerWidth;
     if (width > 900) {
       return (
         desktop
       );
     }if (width < 770) {
      return (
        smallMobile
      );
    }
      else {
       return (
         mobile
       );
     }
  }
}

export default About








