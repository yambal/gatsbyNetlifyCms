import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import TemplateIndexPage from '../components/templates/TemplateIndexPage';

export interface iIndexPageProps {
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

interface iIndexDataProps {
  pageResources: any
  data: {
    markdownRemark: {
      frontmatter: iIndexPageProps
    }
  }
  pageContext: any
  pathContext: any
}

const IndexPage:React.SFC<iIndexDataProps> = (props) => {
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
