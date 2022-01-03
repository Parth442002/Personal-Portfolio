import React from 'react'
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from '../maincomponents/Layout'
import AboutPage from '../PageContent/AboutPage'
import SEO from '../components/Seo'
import { isBrowser } from "../utils"
import { window} from "browser-monads";

const desktop=
  <Layout>
    <SEO title='About Me' description='This is the about me page of Parth Katiyar.'/>
    <Parallax pages={1.42}>
      <AboutPage offset={0} factor={1.5}/>
    </Parallax>
  </Layout>


const Largemobile=
  <Layout>
    <SEO title='About Me' description='This is the about me page of Parth Katiyar.'/>
    <Parallax pages={4.3}>
      <AboutPage offset={1.4} factor={2}/>
    </Parallax>
  </Layout>

const SmallMobile=
<Layout>
  <SEO title='About Me' description='This is the about me page of Parth Katiyar.'/>
  <Parallax pages={5}>
    <AboutPage offset={1.8} factor={2}/>
  </Parallax>
</Layout>


class About extends React.Component{

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
        SmallMobile
      );
    }
    }
    else{
      <h1>Loading</h1>
    }
  }
}

export default About


/*

if (width > 1000) {
       return (
         desktop
       );
    }else if(width<1000 && width>800){
      return(
        Largemobile
      )
    }else {
       return (
         SmallMobile
       );
     }
*/








