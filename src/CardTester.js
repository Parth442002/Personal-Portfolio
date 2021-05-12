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
              <img className='bg-contain'
              src='https://gatsby-markdown-personal-website.netlify.app/static/88dfe277f37d634306304f290eccd81a/14b42/cover.jpg'/>
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


/*

const img='http://www.danielledeveloper.com/wp-content/uploads/2018/04/Reactjs-logo-e1523253944211.png'
  return(
    <Link
      to={link}
      rel="noreferrer noopener"
      sx={{
        width: `100%`,
        boxShadow: `lg`,
        position: `relative`,
        textDecoration: `none`,
        borderRadius: `lg`,
        xpx: 4,
        xpy: [4, 5],
        color: `white`,
        background: bg || `none`,
        transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
        "&:hover": {
          color: `white !important`,
          transform: `translateY(-5px)`,
          boxShadow: `xl`,
        },
      }}
    >
        <div
        class="max-w-sm rounded overflow-hidden shadow-lg"
        sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>
          <img class="w-full" src={img} alt="Mountain"/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Mountain</div>
            <p class=" text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">Django</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">React</span>
          </div>
        </div>
    </Link>
*/