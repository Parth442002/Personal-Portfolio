/** @jsx jsx */
import { useColorMode, jsx } from "theme-ui"
import React from 'react'


function Profiletab(props) {
  const {
    img, textH4, textH3, alt, height, width,
  } = props;
  return (
      <div className='justify-center rounded-3xl bg-white border-gray-600'>
      <div className='max-w-md h-auto mx-auto mt-5'>
        <img
          src='https://rolwinreevan.com/location.png'
          height={80}
          width={80}
          alt={'Image was supposed to be here'}
          className='mx-auto my-10'
        />
      </div>
      <div className=''>
        <h4 className='font-semibold text-lg text-center italic'>Born and bought up in</h4>
        <h3 className='font-bold text-xl text-center my-3'>Lucknow</h3>
      </div>
    </div>
  )
}

export default Profiletab
