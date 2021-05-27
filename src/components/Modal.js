/* This example requires Tailwind CSS v2.0+ */
import React ,{ Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { BsFillExclamationTriangleFill } from 'react-icons/bs'
import MailSent from '../assets/illustrations/MailSent'
import '../styles/FontsContent.css'


export default function Example({open, setOpen}) {


  const cancelButtonRef = useRef(null)


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={open}
        onClose={setOpen}
      >
        <div className="flex items-center justify-center min-h-screen pt-6 px-4 pb-20 text-center sm:block sm:p-0"
        style={{
          fontFamily:['Varela Round','Comfortaa','sans serif']
        }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-center bg-white rounded-lg text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-center">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-bold text-gray-900 mx-auto text-center"
                    style={{
                      fontFamily:['Raleway','sans serif']
                    }}
                    >
                      THANK YOU !!
                    </Dialog.Title>
                    <MailSent className='mx-auto text-center'/>
                    <div className="mt-2">
                      <p className="text-sm text-gray-900 w-1/2 mx-auto text-center">
                      Your message has successfully been delivered and I will get back to you as soon as possible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse mx-auto text-center">
                <button
                  type="button"
                  className="w-full inline-flex align-center justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                >
                  Go back
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
