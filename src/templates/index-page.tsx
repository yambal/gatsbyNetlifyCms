import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Container from '../components/Container';

interface iIndexPageProps {
  pageResources: any
  data: any
  pageContext: any
  pathContext: any
}

const IndexPage:React.SFC<iIndexPageProps> = (props) => {
  return (
    <Layout>
      <Container>
        <pre>{JSON.stringify(props.data, null, 2)}</pre>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
