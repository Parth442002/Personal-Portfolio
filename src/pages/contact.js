/** @jsx jsx */
import { jsx } from "theme-ui"
import React,{Component} from 'react'
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from '../maincomponents/Layout'
import ContactPage from '../PageContent/ContactPage'



const desktop=
      <Layout>
        <Parallax pages={4.40}>
            <ContactPage offset={0} factor={1}/>
        </Parallax>
      </Layout>


export class contact extends Component {
  render(){
    let width = window.innerWidth;
     if (width > 900) {
       return (
         desktop
       );
     } else {
       return (
         <h1>This was supposed to be the mobile screen.</h1>
       );
     }
  }
}

export default contact
