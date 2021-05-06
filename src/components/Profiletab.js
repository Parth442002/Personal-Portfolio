/** @jsx jsx */
import { useColorMode, jsx } from "theme-ui"
import React from 'react'
import { Slide,Hinge,Flip} from "react-awesome-reveal";


function Profiletab(props) {
  const {
    img, textH4, textH3, alt, height, width,
  } = props;
  return (
    <Flip>
      <div className='justify-center rounded-3xl bg-gray-300 border-gray-600 py-5 hover:opacity-80 transform hover:scale-110 motion-reduce:transform-none'>
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
    </Flip>
  )
}

export default Profiletab
