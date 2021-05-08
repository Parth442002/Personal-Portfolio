
import React from 'react'
import './Logo.css'

function Logo({title='<Parth/>'}) {
  return (
    <>
      <h1 class="gradient-text cursor-pointer block mb-1 text-center text-4xl tracking-widest">{title}</h1>
    </>
  )
}

export default Logo

