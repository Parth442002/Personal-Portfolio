/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'
import {Link} from 'gatsby'

function Button(props) {
  const style=``
  return (
    <Link className='rounded-lg bg-yellow-500 mx-7 border-opacity-25 text-2xl p-3' to={props.target}>{props.value}</Link>
  )
}

export default Button

