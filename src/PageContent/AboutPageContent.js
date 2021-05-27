/** @jsx jsx */
import { jsx } from "theme-ui"
import {Fade,Zoom,AttentionSeeker} from 'react-awesome-reveal'
import Profiletab from '../components/Profiletab'
import {GrFacebook, GrGithub, GrInstagram, GrLinkedin, GrTwitter} from 'react-icons/gr'
import {IoCalendarOutline,IoLocationOutline} from 'react-icons/io5'
import Mainaboutme from '../assets/illustrations/Mainaboutme'
import {HiOutlineMail} from 'react-icons/hi'

import Destination from '../assets/illustrations/Destination'
import Sports from '../assets/illustrations/Sports'
import Car from '../assets/illustrations/Car'
import Code from '../assets/illustrations/Code'
import Outgoing from '../assets/illustrations/Outgoing'
import Dynamic from '../assets/illustrations/Dynamic1'

import '../styles/FontsContent.css'

function AboutPageContent() {
  return (
    <section className="pt-20 md:pt-40 sm:mx-1 lg:mx-2 mt-50 bg-transparent opacity-90">
      <div className="container sm:w-full mx-auto px-2 sm:px-0 lg:flex">
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
                <a href='https://www.linkedin.com/in/parth-katiyar-1224a3206/' className='no-  ' target="_blank">
                  <GrLinkedin className='text-2xl'/>
                </a>
                <a href='https://github.com/Parth442002' className='no-  ' target="_blank" >
                  <GrGithub className='text-2xl'/>
                </a>
                <a href='https://twitter.com/parth__04' className='no-  '  target="_blank" >
                  <GrTwitter className='text-2xl'/>
                </a>
                <a href='https://www.facebook.com/parth.katiyar.92/' className='no-  ' target="_blank" >
                  <GrFacebook className='text-2xl' />
                </a>
                <a href='https://www.instagram.com/_parth4_/' className='no-  ' target="_blank" >
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
            <div className='flex flex-row items-center space-x-2 p-2' >
                <HiOutlineMail className='text-xl lg:text-2xl'/>
              <div className="text-llg lg:text-lg font-normal">parthkatiyar04@gmail.com</div>
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
            <p className="text-lg sm:text-sm lg:text-xl mt-6 font-light mb-7">
              My name is Parth Katiyar, a
              <spam className='font-bold  text-indigo-400   '> self-taught developer </spam>
               <spam className='italic'>(of sorts) </spam>
               . I am a Computer Science fresher at
              <spam className='font-bold  text-green-400    '> @SRMIST </spam>
              with a zest for technology. I am a
              <spam className='font-bold text-red-400   '> novice    developer </spam>
               looking to sharpen my technical skills. Currently, I am learning
               <spam className='font-bold text-yellow-400   '> machine learning </spam>
               technologies and working on my
               <spam className='font-bold text-purple-400   '> software development </spam>
              capabilities. I am passionate about AI and machine learning and what they could hold for the future. Plus, I like to build and learn stuff on my own !! 🛠
            </p>

            <p className="text-lg lg:text-xl mt-6 font-light mb-7">
              I enjoy turning complex problems into simple, understandable bits of information. In short, I  am good at
              <spam className='font-bold text-pink-400   '>  searching for stuff online </spam>
              . When I'm not pushing pixels around, searching
              <spam className='font-bold  text-blue-400   '> StackOverFlow </spam>
               for answers, or teaching a machine to solve complex problems, you can find me exploring the outdoors 🏔, playing sports 🛼, or hanging out with my friends 👬. But my favorite way to spend time by far is to watch star wars and eat 🍕. I've also tried my hand at cooking 🥘 but, I'm not quite there yet—my kitchen has seen better days.
            </p>
            <ul className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-8 p-5 px-10'>

              <Profiletab
                logo={<Code className='mx-auto my-3'/>}
                heading={'Technophile'}
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
                heading={'Sports aficionado'}
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





