import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

interface iBlogRollProps {
  data?: {
    allMarkdownRemark:{
      edges: {
        node: {
          frontmatter: any
          title: string
          excerpt: string
          fields: {
            slug: string
          }
        }
      }[]
    }
  }
  count?: any
}

const BlogRoll:React.SFC<iBlogRollProps> = (props) => {
  const { edges: posts } = props.data.allMarkdownRemark

  return (
    <div>
      {posts &&
        posts.map(({ node: post }) => {
          const { excerpt } = post
          const { title, date, featuredimage } = post.frontmatter
          return(
            <article>
              <header>
                {post.frontmatter.featuredimage ? (
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: featuredimage,
                      alt: `${post.title}`,
                    }}
                  />
                ) : null}
                  <h4><Link to={post.fields.slug}>{title}</Link></h4>
                  <span>{date}</span>
              </header>
              <p>
                {excerpt}
                <Link className="button" to={post.fields.slug}>
                  Keep Reading →
                </Link>
              </p>
            </article>
          )
        })}
    </div>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
