import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Container from '../components/Container';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import BlogRoll from '../components/BlogRoll';

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
      <Container>
        <h1>{title}</h1>
        <PreviewCompatibleImage imageInfo={image} />
        <h3>{subheading}</h3>
        <h1>{mainpitch.title}</h1>
        <h3>{mainpitch.description}</h3>
        <h3>{heading}</h3>
        <p>{description}</p>
        <h3>{intro.heading}</h3>
        <p>{intro.description}</p>
        {intro.blurbs.map((blurb, index) => (
          <div key={`blurb-${index}`}>
            <PreviewCompatibleImage imageInfo={blurb.image} />
            <p>{blurb.text}</p>
            <hr />
          </div>
        ))}

        <h3>BlogRoll</h3>
        <BlogRoll />
        <Link className="btn" to="/blog">
          Read more
        </Link>

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
