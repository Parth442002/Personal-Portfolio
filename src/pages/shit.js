import React from 'react'
import Hero from '../maincomponents/Hero'
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from '../maincomponents/Layout'
import Projects from '../maincomponents/Projects'
import About from '../maincomponents/About'
import Contact from '../maincomponents/Contact'

const Index = () => (
  <Layout>
    <Parallax pages={5}>
      <Hero offset={0} factor={1} />
      <Projects offset={1} factor={2}/>
      <About offset={3} factor={1} />
      <Contact offset={4} factor={1}/>
    </Parallax>
  </Layout>
)

export default Index


/*

#F7FAFC


bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500

<div className="relative py-3 sm:max-w-xl sm:mx-auto mt-10">
    <div className="absolute inset-0 dark:#F7FAFC shadow-lg transform -skew-y-7 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
    style={{backgroundColor:dark ? '#F7FAFC' : '#141821'}}></div>
    <div className="relative px-4 py-10 bg-blue-500 shadow-lg sm:rounded-3xl sm:p-20">
      <div className="max-w-md mx-auto">
        <div class="form md:w-3/4 sm:w-full mx-auto">
            <div>
              <span class="uppercase text-normal  font-bold">Full Name</span>
              <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder=""/>
            </div>
            <div class="mt-8">
              <span class="uppercase text-normal  font-bold">Email</span>
              <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"/>
            </div>
            <div class="mt-8">
              <span class="uppercase text-normal font-bold">Message</span>
              <textarea
              class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div class="mt-8">
              <button
                class="uppercase text-sm font-bold tracking-wide bg-yellow-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
  </div>


*/