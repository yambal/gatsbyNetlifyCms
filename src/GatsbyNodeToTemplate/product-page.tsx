import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import TemplateProductPage from '../components/templates/TemplateProductPage';

export interface iProductPageProps {
  title: string
  image: any
  heading: string
  description: string
  intro: any
  main: {
    heading: string
    description: string
    image1: {
      alt: string
      image: any
    }
    image2: {
      alt: string
      image: any
    }
    image3: {
      alt: string
      image: any
    }
  }
  testimonials: {
    author: string
    quote: string
  }[]
  full_image: any
  pricing: {
    heading: string
    description: string
    plans: {
      description: string
      items: string[]
      plan: string
      price: string
    }
  }
}

interface iProductDataProps {
  location: any
  data: {
    markdownRemark: {
      frontmatter: iProductPageProps
    }
  }
}

const ProductPage:React.SFC<iProductDataProps> = (props) => {
  const {
    title,
    image,
    description,
    heading,
    main,
    testimonials,
    pricing,
    full_image
  } = props.data.markdownRemark.frontmatter
  return (
    <Layout>
      <TemplateProductPage
        title={title}
        image={image}
        description={description}
        heading={heading}
        intro={props.data.markdownRemark.frontmatter.intro}
        main={main}
        testimonials={testimonials}
        pricing={pricing}
        full_image={full_image}
      />
    </Layout>
  )
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
