import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      BlogPostTemplate
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
