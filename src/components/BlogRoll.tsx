import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

interface iBlogRollProps {
  data?: any
  count?: any
}

const BlogRoll:React.SFC<iBlogRollProps> = (props) => {
  const { data } = props
  const { edges: posts } = data.allMarkdownRemark

  return (
    <div className="columns is-multiline">
      {posts &&
        posts.map(({ node: post }) => (
          <article>
            <header>
              {post.frontmatter.featuredimage ? (
                <PreviewCompatibleImage
                  imageInfo={{
                    image: post.frontmatter.featuredimage,
                    alt: `featured image thumbnail for post ${
                      post.title
                    }`,
                  }}
                />
              ) : null}
                <Link
                  className="title has-text-primary is-size-4"
                  to={post.fields.slug}
                >
                  {post.frontmatter.title}
                </Link>
                <span> &bull; </span>
                <span className="subtitle is-size-5 is-block">
                  {post.frontmatter.date}
                </span>
            </header>
            <p>
              {post.excerpt}
              <Link className="button" to={post.fields.slug}>
                Keep Reading →
              </Link>
            </p>
          </article>
        ))}
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
