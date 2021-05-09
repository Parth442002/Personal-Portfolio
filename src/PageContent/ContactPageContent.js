/** @jsx jsx */
import { jsx ,useColorMode} from "theme-ui"
import {Bounce, Fade,Zoom,AttentionSeeker} from 'react-awesome-reveal'
import {GrFacebook, GrGithub, GrInstagram, GrLinkedin, GrTwitter,GrLocation} from 'react-icons/gr'
import {IoCalendarOutline,IoLocationOutline,IoMailOutline} from 'react-icons/io5'
import Formsvg from '../images/Formsvg'
import emailjs from 'emailjs-com';


function ContactPageContent() {
  const [colorMode, setColorMode] = useColorMode()
  let dark=''
  if (colorMode=='light'){
    dark=false
  }else{
    dark=true
  }

  const SERVICE_ID='contact_service'
  const TEMPLATE_ID='contact_form'
  const USER_ID='user_fDLBMNIScZmcjaTDUlLrV'

  //This is the email sending function.
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID,TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  const imgadd='https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg'
  return (
    <section className="pt-20 md:pt-40 mt-50 bg-transparent opacity-90">
      <div className="container mx-auto px-8 lg:flex">
        <div className="lg:w-1/3 mr-3 space-y-5">
          <Fade direction='left'>
            <img src={imgadd} height='200' width='200' className='
             rounded-3xl '/>
            <h3 className="text-2xl lg:text-3xl  font-bold italic p-2 table">
              PARTH KATIYAR
            </h3>
            <h3 className="text-lg lg:text-xl  font-normal bg-gray-400 rounded-3xl p-2 table">
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
          <Formsvg/>
        </div>



        <div className="text-center lg:text-left lg:w-2/3">
          <Zoom>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-none my-3">
            Lets Talk
          </h1>
          </Zoom>
          <p className="text-lg lg:text-xl mt-6 font-light mb-7">
            Currently I work mostly with Javascript technologies like ReactJS and NodeJS. I also have hands on experience working with cloud infrastructures like AWS/GCP and have deployed applications keeping scalability in mind.
            </p>

          <div className="relative py-3 sm:max-w-xl sm:mx-auto mt-10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-800  shadow-lg transform -skew-y-7  sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
            >
            </div>
            <div className="relative px-4 py-6 bg-white shadow-lg sm:rounded-3xl sm:py-10"
            >
              <div className="max-w-md mx-auto">
                <form onSubmit={sendEmail} className="contact-form md:w-3/4 sm:w-full mx-auto" method='post'>

                  <div>
                    <span class="uppercase text-normal text-black  font-bold">Full Name</span>
                    <input
                      type="text" name="user_name"
                      class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      placeholder=""/>
                  </div>

                  <div class="mt-8">
                    <span class="uppercase text-normal text-black  font-bold">Email</span>
                    <input
                      type="email" name="user_email"
                      class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    />
                  </div>

                  <div class="mt-8">
                    <span class="uppercase text-normal text-black font-bold">Message</span>
                    <textarea
                    name="message"
                    class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></  textarea>
                  </div>

                  <div class="mt-8">
                    <button
                      type='submit'
                      class="uppercase text-sm font-bold tracking-wide bg-yellow-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                      Send Message
                    </button>
                  </div>

                </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
  )
}

export default ContactPageContent


/*
style={{backgroundColor:dark ? '#F7FAFC' : '#141821'}}

<Fade direction='right'>
            <p className="text-lg lg:text-xl mt-6 font-light mb-7">
            Hello !! My name is Rolwin Reevan Monteiro. I'm a full stack web developer who is passionate about various web technologies. I like to experiment with different web technologies. I have an experience of nearly 3 years working with LAMP stack, MERN stack and ELK stack. Building fancy UI's just like this one that your seeing 😅 and writing blogs about tech stacks is what Rolwin loves to do. Check my blog which I update every week for some Javascript and some cool notes on web technologies.
            </p>
            <p className="text-lg lg:text-xl mt-6 font-light mb-7">
            Currently I work mostly with Javascript technologies like ReactJS and NodeJS. I also have hands on experience working with cloud infrastructures like AWS/GCP and have deployed applications keeping scalability in mind.
            </p>
            <ul className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-8  p-5'>
              <Profiletab/>
              <Profiletab/>
              <Profiletab/>
              <Profiletab/>
              <Profiletab/>
              <Profiletab/>
            </ul>
          </Fade>

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
                class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </div>
          </div>
        </div>
*/
