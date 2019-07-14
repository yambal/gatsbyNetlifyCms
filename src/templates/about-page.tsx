import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container';
import { HTMLContent } from '../components/Content';

const AboutPage:React.SFC<iAboutPageProps> = (props) => {
  return (
    <Layout>
      <Container>
        <h2>{props.data.markdownRemark.frontmatter.title}</h2>
        <HTMLContent content={props.data.markdownRemark.html}/>
      </Container>
    </Layout>
  )
}

export default AboutPage

interface iAboutPageProps{
  loaction: {
    pathname: string
  }
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        title: string
      }
    }
  }
}

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
