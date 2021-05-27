/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'
import {Link} from 'gatsby'
import '../styles/FontsContent.css'
import { nominalTypeHack } from "prop-types"

function Button(props) {
  const style=``
  return (
    <Link className='rounded-lg bg-yellow-500 mx-7 border-opacity-25 text-2xl p-3 hover:text-white hover:bg-yellow-600'
    style={{
      textDecoration:'none',
      fontFamily:['Varela Round','Comfortaa','sans serif'],
    }}
    to={props.target}
    >
      {props.value}
    </Link>
  )
}

export default Button

