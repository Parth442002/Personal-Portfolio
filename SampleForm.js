/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import {Bounce, Fade,Zoom,AttentionSeeker} from 'react-awesome-reveal'
import  Timeline  from "../components/Timeline"
import ProgressBar from '../components/ProgressBar/ProgressBar'
import '../styles/FontsContent.css'

function ResumePageContent() {
  return (
      <section className='mx-auto h-14 tracking-normal'
      style={{
        fontFamily:['Varela Round','Comfortaa','sans serif']
      }}
      >
        <h1 className='text-3xl lg:text-4xl xl:text-5xl font-bold leading-none mt-3 mb-10'
        style={{
          fontFamily:['Raleway','sans serif']
        }}
        >Resume</h1>
        <main className=' text-lg lg:text-xl font-light '>
          <div className='education'>
            <h2 className='text-xl lg:text-2xl xl:text-3xl font-semibold leading-none mt-3 mb-7 '
            style={{
              fontFamily:['Raleway','sans serif']
            }}
            >Education</h2>
            <div className='p-5 bg-transparent opacity-80 rounded-3xl'>
              <Timeline
                title='Srm institute of technology'
                subtitle='Btech in computer science'
                content='Pursuing btech in computer science with specialization in artifical intelligence and machine learning'
                startDate='August 2020'
                endDate='Present'
                result='__'
              />
              <Timeline
                title='Delhi Public School'
                subtitle='Higher Secondary School'
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                startDate='March 2019'
                endDate='April 2020'
                result='91%'
              />
              <Timeline
                title='Delhi Public School'
                subtitle='Secondary School Certificate'
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                startDate='March 2018'
                endDate='April 2019'
                result='84%'
              />
            </div>
          </div>
          <div className='Experience'>
            <h2 className='text-xl lg:text-2xl xl:text-3xl font-semibold leading-none mt-3 mb-7 '
            style={{
              fontFamily:['Raleway','sans serif']
            }}
            >Experience</h2>
            <div className='p-5 bg-transparent opacity-80 rounded-3xl'>
              <Timeline
                title='Iota Alliance'
                subtitle='Technical associate'
                content='Part of Iota alliance and working on the multiple projects related to the field of artificial intelligence and machine learning.'
                startDate='August 2020'
                endDate='Present'
                aresult='__'
              />
              <Timeline
                title='Camber Racing'
                subtitle='Self Driving Car engineer'
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                startDate='September 2020'
                endDate='Present'
                aresult='91%'
              />
            </div>
          </div>
          <div className='certificates'>
            <h2 className='text-xl lg:text-2xl xl:text-3xl font-semibold leading-none mt-3 mb-7 '
            style={{
              fontFamily:['Raleway','sans serif']
            }}
            >Certificates</h2>
            <div className='p-5 bg-transparent opacity-80 rounded-3xl'>
              <Timeline
                title='DeepLearning.ai'
                subtitle='DeepLearning specialization from deeplearning.ai'
                content='Completed the deeplearning.ai specialization available on coursera.'
                startDate='August 2020'
                endDate='October 2020'
                sresult='__'
              />
              <Timeline
                title='Django'
                subtitle='Django advanced course from udemy.'
                content="Completed the advance django course from udemy to build the basic foundation of python based backend web developement."
                startDate='March 2020'
                endDate='june 2020'
                sresult='91%'
              />
            </div>
          </div>
          <div className='extracuricular'>
            <h2 className='text-xl lg:text-2xl xl:text-3xl font-semibold leading-none mt-3 mb-7 '
            style={{
              fontFamily:['Raleway','sans serif']
            }}
            >Extra Curicular</h2>
            <div className='p-5 bg-transparent opacity-80 rounded-3xl'>
              <Timeline
                title='8th National Roll ball championship'
                subtitle='Represented the state of Uttar Pradesh.'
                content='Secured First position and represented Uttar Pradesh  at 8th National Roll Ball championship held at National sports complex Guhwati'
                startDate='5 '
                endDate='10 September 2016'
                sresult='National Gold'
              />
              <Timeline
                title='National School Games'
                subtitle='Represented CBSE School board in national School Games.'
                content="Took part in the senior category of roll ball competetion held during the annual national school games 2015 in Sports Village Pune."
                startDate='12 '
                endDate='18 October 2015'
                sresult='2nd Runner Up'
              />
              <Timeline
                title='State Speed Skating Championship'
                subtitle='Represented the district of Lucknow.'
                content="Took part in the state level speed skating championship held in Lucknow"
                startDate='12 '
                endDate='18 October 2015'
                sresult='First Position'
              />
            </div>
          </div>
          <div className='techskills'>
            <h2 className='text-xl lg:text-2xl xl:text-3xl font-semibold leading-none mt-3 mb-7 '
            style={{
              fontFamily:['Raleway','sans serif']
            }}
            >TechSkills</h2>
            <div className='p-5 space-y-5 bg-transparent opacity-80 rounded-3xl'>
              <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 md:gap-7'>
                <ProgressBar skill='Machine Learning' percent='80%'/>
                <ProgressBar skill='Deep Learning' percent='60%'/>
                <ProgressBar skill='Python' percent='90%'/>
                <ProgressBar skill='Django' percent='70%'/>
                <ProgressBar skill='React' percent='60%'/>
                <ProgressBar skill='Css' percent='80%'/>
              </ul>
            </div>
          </div>
      </main>
      </section>
  )
}

export default ResumePageContent