import React from 'react'
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from '../maincomponents/Layout'
import ProjectPage from '../PageContent/ProjectPage'
import { isBrowser } from "../utils"
import { window} from "browser-monads";
const desktop=
  <Layout>
    <Parallax pages={1.8}>
      <ProjectPage offset={0} factor={1.8}/>
    </Parallax>
  </Layout>

const mobile=
  <Layout>
    <Parallax pages={4.50}>
      <ProjectPage offset={1} factor={2.5}/>
    </Parallax>
  </Layout>


class Project extends React.Component{
  render(){
    if (isBrowser) {
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
    else{
      return <h1>Loading</h1>
    }

  }
}

export default Project
