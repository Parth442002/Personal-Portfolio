/** @jsx jsx */
import styled,{css} from 'styled-components/macro'
import {Link} from 'gatsby'
import { FaBars} from 'react-icons/fa'
import { useColorMode, jsx } from "theme-ui"
import Logo from '../components/Logo/Logo'
import '../styles/FontsContent.css'

const Nav=styled.nav`
  z-index:100;
`
const NavLink=css`

`
const MenuBars=styled(FaBars)`
  display:none;
  @media screen and (max-width:768px){
    display:block;
    msdargin-top:.5rem;
    height:30px;
    width:30px;
    cursor:pointer;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-50%,25%);
  }
`

const NavMenu=styled.div`
  display:flex;
  align-items:center;
  margin-right:50px;

  @media screen and (max-width:768px){
    display:none;
  }
`
const Ullist=styled.ul`
  list-style: none;
  width: 600px;
`

const NavMenuLink=styled(Link)`
  ${NavLink}
  font-family:'Varela Round','Comfortaa','sans serif';
  :after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #fff;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
:hover:after {
  width: 100%;
  left: 0;
}
`
const NavBtn=styled.div`
  display:flex;
  align-items:center;
  margin-right:24px;
  @media screen and (max-width:768px){
    display:block;
    msdargin-top:.5rem;
    height:28px;
    width:30px;
    cursor:pointer;
    position:absolute;
    top:0;
    right:0;
    margin-right:3rem;
    transform:translate(-50%,25%);
  }
`

const Navbar = ({toggle}) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e) => {
    setColorMode(isDark ? `light` : `dark`)
  }
  return (
    <Nav className='flex justify-between h-16 py-4 px-8 fixed w-full'>
       <Link className='cursor-pointer flex items-center py-0 no-underline text-xl font-semibold' to='/' >
            <Logo/>
          </Link>
      <MenuBars onClick={toggle}/>
      <NavMenu>
        <NavMenuLink className='table-cell relative cursor-pointer flex items-center h-full py-0 px-4 no-underline text-xl font-semibold' to='/about#target' >
            About Me
          </NavMenuLink>

        <NavMenuLink className='table-cell  relative cursor-pointer flex items-center h-full py-0 px-4 no-underline text-xl font-semibold' to='/resume'>
            Resume
        </NavMenuLink>
        <NavMenuLink className='table-cell  relative cursor-pointer flex items-center h-full py-0 px-4 no-underline text-xl font-semibold' to='/contact'primary='true'>
          Contact Me
        </NavMenuLink>
      </NavMenu>

      <NavBtn>
      <button onClick={toggleColorMode} className=''>
          {isDark ? (
            <svg className="w-8 h-8 md:w-8 md:h-8 hover:text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            <svg className="w-8 h-8 md:w-8 md:h-8 hover:text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </button>
      </NavBtn>
    </Nav>
  )
}

export default Navbar

/**
 <NavMenuLink className='table-cell  relative cursor-pointer flex items-center h-full py-0 px-4 no-underline text-xl font-semibold' to='/projects' >
            Projects
        </NavMenuLink>

@media screen and (max-width:768px){
    display:none;
 */