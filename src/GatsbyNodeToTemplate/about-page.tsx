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

const WebServicePost:React.SFC<iAboutPageProps> = (props) => {
  const { html, frontmatter: {title}} = props.data.markdownRemark
  return (
    <Layout>
      <pre></pre>
    </Layout>
  )
}

export default WebServicePost

export const webServiceQuery = graphql`
  query WebServicePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
