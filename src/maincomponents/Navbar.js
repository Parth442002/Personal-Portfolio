/** @jsx jsx */
import React from 'react'
import styled,{css} from 'styled-components/macro'
import {Link} from 'gatsby'
import { FaBars} from 'react-icons/fa'
import { StaticImage } from "gatsby-plugin-image"
import { useColorMode, jsx } from "theme-ui"


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
  margin-right:-48px;

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
    display:none;
  }
`

const Navbar = ({toggle}) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e) => {
    setColorMode(isDark ? `light` : `dark`)
  }
  const brand="<Parth/>"
  return (
    <Nav className='flex justify-between h-16 py-4 px-8 fixed w-full'>
       <svg class="h-8 w-8 mr-2" width="80" height="80" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
      <MenuBars onClick={toggle}/>
      <NavMenu>
        <NavMenuLink className='table-cell  relative cursor-pointer flex items-center h-full py-0 px-4 no-underline text-xl font-semibold' to='/about#target' >
            About Me
          </NavMenuLink>
        <NavMenuLink className='table-cell  relative cursor-pointer flex items-center h-full py-0 px-4 no-underline text-xl font-semibold' to='/projects' >
            Projects
        </NavMenuLink>
        <NavMenuLink className='table-cell  relative cursor-pointer flex items-center h-full py-0 px-4 no-underline text-xl font-semibold' to='/resume'>
            Resume
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
        <NavMenuLink className='table-cell  relative cursor-pointer flex items-center h-full py-0 px-4 no-underline text-xl font-semibold' to='/contact'primary='true'>Contact Me</NavMenuLink>
      </NavBtn>
    </Nav>
  )
}

export default Navbar

/**
 {menuData.map((item,index)=>(
          <NavMenuLink className='cursor-pointer flex items-center h-full py-0 px-4 no-underline text-xl font-semibold' to={item.link} key={index}>
            {item.title}
          </NavMenuLink>
        ))}
 */