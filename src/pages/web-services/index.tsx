import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

const WebServices = (props) => (
  <Layout>
    <section className="section">
        <pre>{JSON.stringify(props, null, 2)}</pre>
    </section>
  </Layout>
)

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
          id
        }
      }
    }
  }
`