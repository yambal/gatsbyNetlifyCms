import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container';
import { HTMLContent, iHTMLContentProps } from '../components/Content';

interface iAboutPageTemplateProps extends iHTMLContentProps  {
  title: string
}

export const AboutPageTemplate:React.SFC<iAboutPageTemplateProps> = (props) => {
  return(
    <Container>
      <h2>{props.title}</h2>
      <HTMLContent className={props.className} content={props.content} isHtml={props.isHtml}/>
    </Container>
  )
}

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

const AboutPage:React.SFC<iAboutPageProps> = (props) => {
  return (
    <Layout>
      <AboutPageTemplate
        title={props.data.markdownRemark.frontmatter.title}
        content={props.data.markdownRemark.html}
        isHtml={true}
      />
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
