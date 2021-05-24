/** @jsx jsx */
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { useColorMode, jsx } from "theme-ui"
import '../styles/FontsContent.css'


const DropdownContainer=styled.div`
  font-family:'Varela Round','Comfortaa','sans serif';
  position:fixed;
  z-index:999;
  width:100%;
  height:100%;
  background:#cd853f;
  display:grid;
  align-items:center;
  top:0;
  left:0;
  transition:0.3s ease-in-out;
  opacity:${({isOpen})=>(isOpen?'1':'0')};
  top:${({isOpen})=>(isOpen?'0':'-100%')};
`
const Icon=styled.div`
  position:absolute;
  top:1.2rem;
  right:1.5rem;
  background:transparent;
  font-size:2rem;
  cursor:pointer;
  outline:none;
`
const CloseIcon=styled(FaTimes)`
  color:#000d1a;
`
const DropdownWrapper=styled.div``

const DropdownMenu=styled.div`
  display:grid;
  grid-template-columns:1fr;
  grid-template-rows:repeat(4,80px);
  text-align:center;
  margin-bottom:4rem;
  @media screen and (max-width:480px) {
    grid-template-rows::repeat(4,60px)
  }
`
const DropdownLink=styled(Link)`
  display:flex;
  align-items:center;
  justify-content:center;
  color:#fff;
  font-size:1.5rem;
  text-decoration:none;
  list-style:none;
  cursor:pointer;
  transition:0.2s ease-in-out;
  &:hover{
    color:#000d1a;
  }
`
const BtnWrap=styled.div`
  display:flex;
  justify-content: center;
`

const Dropdown = ({isOpen,toggle}) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e) => {
    setColorMode(isDark ? `light` : `dark`)
  }
  const togglecomponent=(<button onClick={toggleColorMode} className='mt-8'>
    {isDark ? (
      <svg className="w-8 h-8 md:w-10 md:h-10 hover:text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    ) : (
      <svg className="w-8 h-8 md:w-10 md:h-10 hover:text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    )}
    </button>)

  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
      <CloseIcon/>
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
        <DropdownLink className='table-cell  relative cursor-pointer flex items-center h-full py-0 px-4 no-underline text-2xl font-semibold' to='/about' >
            About Me
          </DropdownLink>
        <DropdownLink className='table-cell  relative cursor-pointer flex items-center h-full py-0 px-4 no-underline text-2xl font-semibold' to='/resume'>
            Resume
        </DropdownLink>
        <DropdownLink className='table-cell  relative cursor-pointer flex items-center h-full py-0 px-4 no-underline text-2xl font-semibold' to='/contact'>
            Contact Us
        </DropdownLink>
        </DropdownMenu>
      </DropdownWrapper>
    </DropdownContainer>
  )
}

export default Dropdown

/*
{menuData.map((item,index)=>(
            <DropdownLink to={item.link} key={index}>
              {item.title}
            </DropdownLink>
          ))}
*/