import React from 'react'
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from '../maincomponents/Layout'
import BlogPage from '../PageContent/BlogPage'

const desktop=
  <Layout>
    <Parallax pages={1.8}>
      <BlogPage offset={0} factor={1.8}/>
    </Parallax>
  </Layout>

const mobile=
  <Layout>
    <Parallax pages={4.50}>
      <BlogPage offset={1} factor={2.5}/>
    </Parallax>
  </Layout>


class Blog extends React.Component{
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

export default Blog
