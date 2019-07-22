import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Container from '../components/Container';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import BlogRoll from '../components/BlogRoll';
import TemplateIndexPage from '../components/templates/TemplateIndexPage';

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

const IndexPage:React.SFC<iIndexPageProps> = (props) => {
  const {
    image,
    title,
    subheading,
    mainpitch,
    heading,
    description,
    intro
  } = props.data.markdownRemark.frontmatter
  return (
    <Layout>
      <TemplateIndexPage
        title={title}
        image={image}
        subheading={subheading}
        mainpitch={mainpitch}
        heading={heading}
        description={description}
        intro={intro}
      />
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
