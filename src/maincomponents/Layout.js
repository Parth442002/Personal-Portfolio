/** @jsx jsx */
import React,{useState} from "react"
import { Global } from "@emotion/react"
import { jsx } from "theme-ui"
import Navbar from './Navbar'
import Dropdown from '../components/Dropdown'

//import SEO from "./seo"


const Layout = ({ children, className = `` }) => {
  const [isOpen,setIsOpen]=useState(false)
  const toggle=()=>{
    setIsOpen(!isOpen)
  }
  return(
  <React.Fragment>
    <Navbar toggle={toggle}/>
    <Dropdown isOpen={isOpen} toggle={toggle}/>
    <Global
      styles={(theme) => ({
        "*": {
          boxSizing: `inherit`,
          "&:before": {
            boxSizing: `inherit`,
          },
          "&:after": {
            boxSizing: `inherit`,
          },
        },
        html: {
          fontSize: `18px`,
          WebkitTextSizeAdjust: `100%`,
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          backgroundColor: theme.colors.primary,
          color: theme.colors.background,
        },
      })}
    />

    <main className={className}>{children}</main>
  </React.Fragment>
  )
}

export default Layout