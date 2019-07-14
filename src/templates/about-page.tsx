import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container';
import Content, { HTMLContent } from '../components/Content';

interface AboutPageTemplateProps {
  title: string
  content: any
  contentComponent: any
}

export const AboutPageTemplate:React.SFC<AboutPageTemplateProps> = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  return(
    <Container>
      <h2>{title}</h2>
      <PageContent className="content" content={content} />
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
        contentComponent={HTMLContent}
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
