/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import {MDXProvider} from '@mdx-js/react'
import Button from '../components/Button'

function   ProjectPageContent({data,pageContext}) {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;
  return (
    <section>
      <h1>{frontmatter.title}</h1>
      <h3>{frontmatter.date}</h3>
      <div>
      {previous === null ? null : (
        <div>
          {previous && (
            <Link to={previous.fields.slug}>
              {previous.frontmatter.title}
            </Link>
          )}
        </div>
      )}
      {next === null ? null : (
        <div>
          {next && (
            <Link to={next.fields.slug}>
              {next.frontmatter.title}
            </Link>
          )}
        </div>
      )}
      </div>
      <div>
              {frontmatter.tags.map((item) => (
                <h1 key={item}>{item}</h1>
              ))}
      </div>
      <div>
        <MDXRenderer>{body}</MDXRenderer>
      </div>

    </section>
  )
}

export default   ProjectPageContent