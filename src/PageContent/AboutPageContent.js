/** @jsx jsx */
import { jsx } from "theme-ui"
import {Bounce, Fade,Zoom,AttentionSeeker} from 'react-awesome-reveal'
import Profiletab from '../components/Profiletab'
import {GrFacebook, GrGithub, GrInstagram, GrLinkedin, GrTwitter,GrLocation} from 'react-icons/gr'
import {IoCalendarOutline,IoLocationOutline,IoMailOutline} from 'react-icons/io5'
import Mainaboutme from '../assets/illustrations/Mainaboutme'
import '../styles/FontsContent.css'

import Destination from '../assets/illustrations/Destination'
import Sports from '../assets/illustrations/Sports'
import Car from '../assets/illustrations/Car'
import Code from '../assets/illustrations/Code'
import Outgoing from '../assets/illustrations/Outgoing'
import Dynamic from '../assets/illustrations/Dynamic1'


function AboutPageContent() {
  const imgadd='https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg'
  return (
    <section className="pt-20 md:pt-40 mt-50 bg-transparent opacity-90">
      <div className="container mx-auto px-8 lg:flex">
        <div className="lg:w-1/3 mr-3 space-y-5">
          <Fade direction='left'
          style={{
            fontFamily:['Varela Round','Comfortaa','sans serif']
          }}
          >
            <img height={200} width={200} src={'./parth.jpeg'} className='
             rounded-3xl '/>
            <h3 className="text-2xl lg:text-3xl font-extrabold p-2 table"
            style={{
              fontFamily:['Raleway','sans serif']
              }}
            >
              Parth Katiyar
            </h3>
            <h3 className="text-lg lg:text-xl  font-normal bg-gray-300 rounded-3xl p-2 table text-black">
              Computer Science
            </h3>

            <AttentionSeeker effect='animate__wobble'>
            <div className='flex flex-row space-x-5 p-2'>
                <a href='https://www.linkedin.com/in/parth-katiyar-1224a3206/' className='no-underline' target="_blank">
                  <GrLinkedin className='text-2xl'/>
                </a>
                <a href='https://github.com/Parth442002' className='no-underline' target="_blank" >
                  <GrGithub className='text-2xl'/>
                </a>
                <a href='https://twitter.com/parth__04' className='no-underline'  target="_blank" >
                  <GrTwitter className='text-2xl'/>
                </a>
                <a href='https://www.facebook.com/parth.katiyar.92/' className='no-underline' target="_blank" >
                  <GrFacebook className='text-2xl' />
                </a>
                <a href='https://www.instagram.com/_parth4_/' className='no-underline' target="_blank" >
                  <GrInstagram className='text-2xl'  />
                </a>
              </div>
            </AttentionSeeker>

            <div className='flex flex-row items-center space-x-3 p-2' >
                <IoCalendarOutline className='text-lg lg:text-xl'/>
              <div className="text-lg lg:text-xl font-normal">4 April 2002</div>
            </div>

            <div className='flex flex-row items-center space-x-3 p-2' >
                <IoLocationOutline className='text-lg lg:text-xl'/>
              <div className="text-lg lg:text-xl font-normal">Lucknow, India</div>
            </div>
            <div className='flex flex-row items-center space-x-3 p-2' >
                <IoMailOutline className='text-lg lg:text-xl'/>
              <div className="text-lg lg:text-xl font-normal">parthkatiyar04@gmail.com</div>
            </div>
          </Fade>
          <Mainaboutme/>
        </div>



        <div className="text-center lg:text-left lg:w-2/3">
          <Zoom>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-none my-3"
          style={{
            fontFamily:['Raleway','sans serif']
          }}
          >
            About Me
          </h1>
          </Zoom>
          <Fade direction='right'
          style={{
            fontFamily:['Varela Round','Comfortaa','sans serif']
          }}
          >
            <p className="text-lg lg:text-xl mt-6 font-light mb-7">
            Hello !! My name is Rolwin Reevan Monteiro. I'm a full stack web developer who is passionate about various web technologies. I like to experiment with different web technologies. I have an experience of nearly 3 years working with LAMP stack, MERN stack and ELK stack. Building fancy UI's just like this one that your seeing 😅 and writing blogs about tech stacks is what Rolwin loves to do. Check my blog which I update every week for some Javascript and some cool notes on web technologies.
            </p>
            <p className="text-lg lg:text-xl mt-6 font-light mb-7">
            Currently I work mostly with Javascript technologies like ReactJS and NodeJS. I also have hands on experience working with cloud infrastructures like AWS/GCP and have deployed applications keeping scalability in mind.
            </p>
            <ul className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-8  p-5'>

              <Profiletab
                logo={<Code className='mx-auto my-3'/>}
                heading={'Geek'}
              />
               <Profiletab
                logo={<Dynamic className='mx-auto my-3'/>}
                heading={'Dynamic'}
              />
              <Profiletab
                logo={<Outgoing className='mx-auto my-3'/>}
                heading={'Out-going'}
              />
              <Profiletab
                logo={<Destination className='mx-auto my-3'/>}
                heading={'Hodophile'}
              />
              <Profiletab
                logo={<Sports className='mx-auto my-3'/>}
                heading={'Athelete'}
              />
              <Profiletab
                logo={<Car className='mx-auto my-3'/>}
                heading={'Petrol Head'}
              />

            </ul>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default AboutPageContent

/*

*/





