import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container';
import { graphql } from 'gatsby'

const BlogPost = props => {
  return (
    <Layout>
      <Container>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Container>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
