function ProjectTemplate ({ data, pageContext }) {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;
  alert(next.frontmatter.title)
  return(
    <Layout>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <h5>{frontmatter.tags}</h5>
      <MDXRenderer>{body}</MDXRenderer>
      {previous === false ? null : (
        <>
          {previous && (
            <Button to={previous.fields.slug}>
              {previous.frontmatter.title}
            </Button>
          )}
        </>
      )}
      {next === false ? null : (
        <>
          {next && (
            <Link to={next.fields.slug}>
              {next.frontmatter.title}
            </Link>
          )}
        </>
      )}
    </Layout>
  );
};

export default ProjectTemplate



function ProjectTemplate ({ data, pageContext }) {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;
  return(
    <Layout>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <h5>{frontmatter.tags}</h5>
      <MDXRenderer>{body}</MDXRenderer>
      {previous === false ? null : (
        <>
          {previous && (
            <Link to={previous.fields.slug}>
              <p>{previous.frontmatter.title}</p>
            </Link>
          )}
        </>
      )}
      {next === false ? null : (
        <>
          {next && (
            <Link to={next.fields.slug}>
              <p>{next.frontmatter.title}</p>
            </Link>
          )}
        </>
      )}
    </Layout>
  );
};
