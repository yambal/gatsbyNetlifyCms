import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container';

const AboutPage:React.SFC = (props) => {
  return (
    <Layout>
      <Container>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Container>
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
