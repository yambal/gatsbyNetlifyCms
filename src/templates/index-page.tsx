import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { TemplateIndexPage } from '../components/templates';

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

interface iIndexPageProps {
  pageResources: any
  data: {
    markdownRemark: {
      frontmatter: {
        image: any
        title: string
        heading: string
        subheading: string
        mainpitch: {
          title: string
          description: string
        }
        description: string
        intro: {
          heading: string
          description: string
          blurbs: {
            image: any
            text: string
          }[]
        }
      }
    }
  }
  pageContext: any
  pathContext: any
}

const IndexPage:React.SFC<iIndexPageProps> = props => {
  return (
    <Layout>
      <TemplateIndexPage
        image={props.data.markdownRemark.frontmatter.image}
        title={props.data.markdownRemark.frontmatter.title}
        subheading={props.data.markdownRemark.frontmatter.subheading}
        mainpitch={props.data.markdownRemark.frontmatter.mainpitch}
        heading={props.data.markdownRemark.frontmatter.heading}
        description={props.data.markdownRemark.frontmatter.description}
        intro={props.data.markdownRemark.frontmatter.intro}
      />
    </Layout>
  )
}

export default IndexPage
