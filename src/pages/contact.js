/** @jsx jsx */
import { jsx } from "theme-ui"
import {Component} from 'react'
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from '../maincomponents/Layout'
import ContactPage from '../PageContent/ContactPage'
import SEO from "../components/Seo"



const desktop=

      <Layout>
        <SEO title='Contact' description='Contact me page of Parth Katiyar.'/>
        <Parallax pages={1.5}>
            <ContactPage offset={0} factor={1.6}/>
        </Parallax>
      </Layout>


const mobile=
    <Layout>
      <SEO title='Contact' description='Contact me page of Parth Katiyar.'/>
      <Parallax pages={2.5}>
        <ContactPage offset={0.5} factor={2}/>
      </Parallax>
    </Layout>



class contact extends Component {
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

export default contact
