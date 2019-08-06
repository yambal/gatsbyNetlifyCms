import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

const WebServices = (props) => {
  const { edges } = props.data.allMarkdownRemark
  return (
    <Layout>
      {edges.map((edge, index) => {
        return (
          <div>
            <Link to={edge.node.fields.slug}>{edge.node.frontmatter.serviceNameJa}</Link>
            <p>{edge.node.frontmatter.catch}</p>
            <pre>{JSON.stringify(edge, null, 2)}</pre>
          </div>
        )
      })}
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
                id
              }
              publicURL
            }
            catch
          }
        }
      }
    }
  }
`