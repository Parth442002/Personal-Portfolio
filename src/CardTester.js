/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/Divider"
import Inner from "../elements/Inner"
import Content from "../elements/Content"
import SVG from "../components/Svg"
import styled from 'styled-components'
import { UpDown, UpDownWide,waveAnimation } from "../styles/Animations"
// @ts-ignore

import AboutPageContent from './AboutPageContent'

const InnerWave = styled.div`
  path {
    ${waveAnimation(`20s`)};
  }
`


const About = ({ offset, factor = 1 }) => (
  <div>
    <Content sx={{ variant: `texts.smaller` }} speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <AboutPageContent/>
      </Inner>
    </Content>
    <Divider speed={0.3} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="triangle" hiddenMobile width={48} stroke color="icon_orange" left="10%" top="20%" />
        <SVG icon="hexa" width={48} stroke color="icon_red" left="60%" top="70%" />
        <SVG icon="box" width={6} color="icon_darker" left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
        <SVG icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="50%" />
        <SVG icon="circle" width={16} color="icon_darker" left="70%" top="90%" />
        <SVG icon="triangle" width={16} stroke color="icon_darkest" left="30%" top="65%" />
        <SVG icon="cross" width={16} stroke color="icon_pink" left="28%" top="15%" />
        <SVG icon="circle" width={6} color="icon_darkest" left="75%" top="10%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" hiddenMobile width={24} color="icon_darker" left="5%" top="70%" />
      <SVG icon="circle" width={6} color="icon_darkest" left="4%" top="20%" />
      <SVG icon="circle" width={12} color="icon_darkest" left="50%" top="60%" />
      <SVG icon="upDown" width={8} color="icon_darkest" left="95%" top="90%" />
      <SVG icon="upDown" hiddenMobile width={24} color="icon_darker" left="40%" top="80%" />
      <SVG icon="triangle" width={8} stroke color="icon_darker" left="25%" top="5%" />
      <SVG icon="circle" width={64} color="icon_green" left="95%" top="5%" />
      <SVG icon="box" hiddenMobile width={64} color="icon_purple" left="5%" top="90%" />
      <SVG icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
      <SVG icon="box" width={12} color="icon_darkest" left="40%" top="30%" />
      <SVG icon="hexa" width={16} stroke color="icon_darker" left="10%" top="50%" />
      <SVG icon="hexa" width={8} stroke color="icon_darker" left="80%" top="70%" />

      <UpDown>
        <SVG icon="triangle" hiddenMobile width={48} stroke color="icon_orange" left="60%" top="40%" />
        <SVG icon="hexa" width={40} stroke color="icon_red" left="30%" top="35%" />
        <SVG icon="box" width={6} color="icon_darker" left="70%" top="30%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} color="icon_blue" left="80%" top="70%" />
        <SVG icon="triangle" width={12} stroke color="icon_brightest" left="10%" top="67%" />
        <SVG icon="circle" width={16} color="icon_darker" left="37%" top="50%" />
        <SVG icon="triangle" width={16} stroke color="icon_darkest" left="90%" top="42%" />
        <SVG icon="cross" width={16} stroke color="icon_pink" left="10%" top="40%" />
        <SVG icon="circle" width={6} color="icon_darkest" left="25%" top="70%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_darkest" left="20%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" hiddenMobile width={24} color="icon_darker" left="5%" top="70%" />
      <SVG icon="circle" width={6} color="icon_darkest" left="4%" top="20%" />
      <SVG icon="circle" width={12} color="icon_darkest" left="50%" top="60%" />
      <SVG icon="upDown" width={8} color="icon_darkest" left="95%" top="90%" />
      <SVG icon="upDown" hiddenMobile width={24} color="icon_darker" left="40%" top="80%" />
      <SVG icon="triangle" width={8} stroke color="icon_darker" left="25%" top="5%" />
      <SVG icon="circle" width={64} color="icon_green" left="95%" top="5%" />
      <SVG icon="box" hiddenMobile width={64} color="icon_purple" left="5%" top="90%" />
      <SVG icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
      <SVG icon="box" width={12} color="icon_darkest" left="40%" top="30%" />
      <SVG icon="hexa" width={16} stroke color="icon_darker" left="10%" top="50%" />
      <SVG icon="hexa" width={8} stroke color="icon_darker" left="40%" top="30%" />


    </Divider>
  </div>
)

export default About



/*
<InnerWave sx={{ position: `relative`, height: `full`, svg: { width: `100%`, height: `40vh` } }}>
          <svg xmlns="http://www.w3.org/2000/svg" id="contact-wave" viewBox="0 0 800 338.05" preserveAspectRatio="none">
            <path>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                repeatCount="indefinite"
                dur="30s"
              />
            </path>
          </svg>
        </InnerWave>
*/
