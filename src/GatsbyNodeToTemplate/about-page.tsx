import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import TemplateAboutPage from '../components/templates/TemplateAboutPage';

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
  const { html, frontmatter: {title}} = props.data.markdownRemark
  return (
    <Layout>
      <TemplateAboutPage
        title={title}
        content={html}
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
