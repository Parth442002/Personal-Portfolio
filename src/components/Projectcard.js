/** @jsx jsx */
import { jsx } from "theme-ui"
import {Link} from 'gatsby'
import styled from 'styled-components';
import Img from 'gatsby-image'
import '../styles/FontsContent.css'



export const Posts = styled.div`
`;

export const Post = styled.div`
`;

export const Card = styled.div`
`;

export const Content = styled.div`
`;

export const Image = styled.figure`
`;

export const Title = styled.h3`
`;

export const Description = styled.p``;

export const Date = styled.h3`
`;

export const Tags = styled.ul`
`;

export const Tag = styled.span`
`;


const ProjectCard = ({bg,title,link,date,excerpt,tags,cover}) => {

  return(
      <Link
      to={link}
      className='rounded-3xl md:w-full sm:w-screeb'
      rel="noreferrer noopener"
      style={{
        fontFamily:['Open sans','sans serif']
      }}
      sx={{
        swidth: `100%`,
        boxShadow: `lg`,
        sposition: `relative`,
        textDecoration: `none`,
        sborderRadius: `lg`,
        xpx: 4,
        xpy: [4, 5],
        color: `white`,
        background: bg || `none`,
        transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
        "&:hover": {
          color: `white !important`,
          transform: `translateY(-20px)`,
          boxShadow: `xl`,
        },
      }}>
          <Card className="rounded-3xl flex flex-col overflow-hidden">
            <Image className='bg-cover rounded-t-3xl'>
              <Img fluid={cover}/>
            </Image>
            <Content className='p-4'>
              <Date className='text-base mb-3 text-white'>{date}</Date>
              <Title className='font-semibold mb-4'>{title}</Title>
              <Description className='text-sm'
              style={{
                fontFamily:['Varela Round','Comfortaa','sans serif']
              }}
              >
                {excerpt}
              </Description>
            </Content>
            <Tags className='p-4 pt-2 align-bottom space-x-2 space-y-2'>
              {tags.map((item) => (
                <Tag
                className='text-xs  border-2 border-white rounded-full p-2 mr-2'
                key={item}>{item}</Tag>
              ))}
            </Tags>
          </Card>
      </Link>
  )
}

export default ProjectCard


/*
<div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src="/mountain.jpg" alt="Mountain">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Mountain</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>


    <div
      sx={{
        textTransform: `uppercase`,
        letterSpacing: `wide`,
        pt: 4,
        fontSize: [4, 5],
        fontWeight: `medium`,
        lineHeight: 1,
      }}
    >
      {title}
    </div>
*/
