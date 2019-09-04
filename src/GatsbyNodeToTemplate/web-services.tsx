import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container';
import { graphql } from 'gatsby'
import TemplateWebService from '../components/templates/TemplateWebService';
import { HTMLContent, iHTMLContentProps } from '../components/Content';
import Img from "gatsby-image"
import { relative } from 'upath';

interface iWebServiceProps{
  data: any
}

const WebService:React.SFC<iWebServiceProps> = props => {
  const {
    html,
    frontmatter
  } = props.data.markdownRemark
  return (
    <Layout>
      <Container>
        <div style={{position: "relative"}}>
          <Img
            fluid={frontmatter.featuredimage.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt=""
          />
        </div>
        <TemplateWebService
          title={frontmatter.serviceNameJa}
          description={frontmatter.catch}
          tags={frontmatter.tags}
          content={html}
          isHtml={true}
        />
        <pre>24 {JSON.stringify(props, null, 2)}</pre>
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
        serviceNameJa
        catch
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`
