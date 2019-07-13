import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const AboutPage = ({ data }) => {
  return (
    <Layout>
      AboutPageTemplate
    </Layout>
  )
}


export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
