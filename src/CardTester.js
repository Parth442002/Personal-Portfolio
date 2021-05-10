/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import styled from 'styled-components';

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

export const Tags = styled.div`
`;

export const Tag = styled.span`
`;



const ProjectCard = () => {
  const date='Feb 03 2020'
  const title='Django React intregation'
  const description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  const tags=['Web Development','Django']

  return(
    <Post key={2} className='max-w-full bg-white rounded-3xl transform hover:scale-110 motion-reduce:transform-none'>
      <Link to='/shit'>
          <Card className="w-full h-full rounded-3xl flex flex-col overflow-hidden border border-gray-300">
            <Image className='w-full'>
              <img src='https://gatsby-markdown-personal-website.netlify.app/static/88dfe277f37d634306304f290eccd81a/14b42/cover.jpg'/>
            </Image>
            <Content className='p-4 text-indigo-900'>
              <Date className='text-sm text-yellow-500'>{date}</Date>
              <Title className='font-semibold mb-4'>{title}</Title>
              <Description className=''>{description}</Description>
            </Content>
            <Tags className='p-4 pt-2 mt-auto'>
              {tags.map((item) => (
                <Tag
                className='text-xs text-indigo-900 border border-yellow-500 rounded-full px-2 py-1 mr-2'
                key={item}>{item}</Tag>
              ))}
            </Tags>
          </Card>
      </Link>
    </Post>
  )
}

export default ProjectCard