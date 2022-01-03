/** @jsx jsx */
import { jsx } from "theme-ui"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from '../maincomponents/Layout'
import ResumePage from '../PageContent/ResumePage'
import React from 'react'
import SEO from '../components/Seo'
import { isBrowser } from "../utils"
import { window} from "browser-monads";

const desktop=
  <Layout>
    <SEO title='Resume' description='The resume page of Parth Katiyar.'/>
    <Parallax pages={3}>
      <ResumePage offset={-0.09} factor={1.5}/>
    </Parallax>
  </Layout>

const Largemobile=
  <Layout>
    <SEO title='Resume' description='The resume page of Parth Katiyar.'/>
    <Parallax pages={5.5}>
      <ResumePage offset={-0.099} factor={1.5}/>
    </Parallax>
  </Layout>

const Smallmobile=
  <Layout>
    <SEO title='Resume' description='The resume page of Parth Katiyar.'/>
    <Parallax pages={7}>
      <ResumePage offset={-0.099} factor={1.5}/>
    </Parallax>
  </Layout>


class Resume extends React.Component{
  render(){
    if (isBrowser) {
      let width = window.innerWidth;
      if (width > 800) {
        return (
          desktop
      );
      }else if(width<800 && width>400){
        return(
          Largemobile
        )
      }else {
        return (
          Smallmobile
        );
      }
    }
    else{
      return <h1>Loading</h1>
    }

  }
}


export default Resume
