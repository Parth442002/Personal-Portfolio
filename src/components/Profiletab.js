/** @jsx jsx */
import { useColorMode, jsx } from "theme-ui"
import React from 'react'
import { Slide,Hinge,Flip} from "react-awesome-reveal";

function Profiletab(props) {
  return (
      <div>
      <div class=" absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 shadow-lg transform skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div className=' relative justify-center rounded-3xl bg-white border-gray-600 py-5 transform hover:scale-110 motion-reduce:transform-none'>
      <div className='max-w-md h-auto mx-auto mt-5'>
        {props.logo}
      </div>
      <div className=''>
        <h3 className='font-bold text-xl text-black text-center my-3'>
          {props.heading}
        </h3>
      </div>
    </div>
  </div>
  )
}

export default Profiletab


/*


outer div:-
inset-0 bg-gradient-to-r from-blue-800 to-blue-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl

inner div:-

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
*/
