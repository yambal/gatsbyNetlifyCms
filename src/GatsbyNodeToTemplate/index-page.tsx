import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import TemplateIndexPage from '../components/templates/TemplateIndexPage';
import { iImageInfo } from '../components/CMSImage';

export interface iIndexPageProps {
  featuredimage : {
    publicURL: string
    childImageSharp: any
    colors: {
      darkMuted: string
      darkVibrant: string
      lightMuted: string
      lightVibrant: string
      muted: string
      vibrant: string
    }
  }
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
      image: iImageInfo
      text: string
    }[]
  }
}

interface iIndexDataProps {
  pageResources: any
  data: {
    markdownRemark: {
      frontmatter: any
    }
  }
  pageContext: any
  pathContext: any
}

const IndexPage:React.SFC<iIndexDataProps> = (props) => {
  console.log(51, props)
  const {
    catchimageHome,
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
        featuredimage={catchimageHome}
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
        catchimageHome
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
