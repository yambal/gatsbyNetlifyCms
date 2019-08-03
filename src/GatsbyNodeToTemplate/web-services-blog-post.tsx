import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container';
import { graphql } from 'gatsby'
import TemplateWebService from '../components/templates/TemplateWebService';

interface iWebServiceProps{
}

const WebService:React.SFC<iWebServiceProps> = props => {
  return (
    <Layout>
      <Container>
        <pre>56 {JSON.stringify(props, null, 2)}</pre>
      </Container>
    </Layout>
  )
}

export default WebService

export const pageQuery = graphql`
  query WebServicePostByID($id: String!) {
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
