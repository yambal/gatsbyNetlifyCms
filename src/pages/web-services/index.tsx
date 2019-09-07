import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Container from '../../components/Container';
import Img from "gatsby-image"

interface colors {
  vibrant: string
  muted: string
  lightVibrant: string
  lightMuted: string
  darkVibrant: string
  darkMuted: string
}

const WebServices = (props) => {
  const { edges } = props.data.allMarkdownRemark

  return (
    <Layout>
      
      <Container>
      
        {edges.map((edge, index) => {
          const { colors: colors } = edge.node.frontmatter.featuredimage
          return (
            <div>
              <Img
                fluid={edge.node.frontmatter.featuredimage.childImageSharp.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                alt=""
                style={{ width: '150px', height: '150px' }}
              />
              <Link to={edge.node.fields.slug}>{edge.node.frontmatter.serviceNameJa}</Link>

              <span style={{ color: colors.vibrant }} >{colors.vibrant}</span>
              <span style={{ color: colors.muted }} >{colors.muted}</span>
              <span style={{ color: colors.lightVibrant }} >{colors.lightVibrant}</span>
              <span style={{ color: colors.lightMuted }} >{colors.lightMuted}</span>
              <span style={{ color: colors.darkVibrant }} >{colors.darkVibrant}</span>
              <span style={{ color: colors.darkMuted }} >{colors.darkMuted}</span>

              <p>{edge.node.frontmatter.catch}</p>
              <pre>{JSON.stringify(edge, null, 2)}</pre>
              <pre>{JSON.stringify(colors, null, 2)}</pre>
            </div>
          )
        })}
      </Container>
    </Layout>
  )
}

export default WebServices

export const WebServiceQuery = graphql`
  query WebServiceQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000, filter: {frontmatter: {templateKey: {eq: "web-services"}}}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            serviceNameJa
            tags
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 1280) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
              publicURL
              colors {
                vibrant
                muted
                lightVibrant
                lightMuted
                darkVibrant
                darkMuted
              }
            }
            catch
          }
        }
      }
    }
  }
`