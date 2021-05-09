/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react';
import styled from 'styled-components';


export const STimeline = styled.div`
  border-color:#F9A815;
  &:last-child {
    padding-bottom:0rem;
  }
`;

export const Details = styled.div``

export const Content = styled.div``

export const Title = styled.div``

export const Subtitle = styled.div``

export const Date = styled.div`
  width: fit-content;
  border-color:#FB9D06;
`

export const Point = styled.span`
  left: -11px;
  top: 40px;
  background-color:#FB9D06;
`


function Timeline({ title, subtitle, content, startDate, endDate,result }) {
  return (
    <STimeline className='flex flex-col sm:flex-row w-full p-3 relative border-l border-gray-800  max-w-3xl space-x-3 font-normal'>
      <Point className='w-5 h-5 border-2 border-gray-300 rounded-full absolute' />
      <Details className='w-full sm:w-1/3'>
        <Date className='text-sm border  rounded-full px-2'>
          {startDate} - {endDate}
        </Date>
        <Title className='font-semibold mt-3'>{title}</Title>
        <Subtitle className='text-sm mt-2'>{subtitle}</Subtitle>
        <Subtitle className='text-sm font-bold'>{result}</Subtitle>
      </Details>
      <Content className='w-full sm:w-2/3 mt-4 sm:mt-0'>{content}</Content>
  </STimeline>
  )
}

export default Timeline
