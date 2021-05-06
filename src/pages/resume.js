/** @jsx jsx */
import { jsx } from "theme-ui"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from '../maincomponents/Layout'
import ResumePage from '../PageContent/ResumePage'
import React from 'react'

const desktop=
  <Layout>
    <Parallax pages={2.8}>
      <ResumePage offset={-0.09} factor={1.5}/>
    </Parallax>
  </Layout>

const mobile=
  <Layout>
    <Parallax pages={4.40}>
      <ResumePage offset={-0.099} factor={1.5}/>
    </Parallax>
  </Layout>


class Resume extends React.Component{
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

export default Resume
