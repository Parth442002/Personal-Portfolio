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


const Largemobile=
  <Layout>
    <Parallax pages={4.3}>
      <AboutPage offset={1.4} factor={2}/>
    </Parallax>
  </Layout>

const SmallMobile=
<Layout>
  <Parallax pages={5}>
    <AboutPage offset={1.8} factor={2}/>
  </Parallax>
</Layout>


class About extends React.Component{

  render(){
    let width = window.innerWidth;
    alert(width);
    if (width > 1300) {
      return (
        desktop
      );
   }else if(width<1300 && width>400){
     return(
       Largemobile
     )
   }else {
      return (
        SmallMobile
      );
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








