import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container';
import { graphql } from 'gatsby'
import TemplateBlogPost from '../components/templates/TemplateBlogPost';

interface iBlogPostProps{
  loaction: {
    pathname: string
  }
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        title: string
        description: string
        tags: string[]
      }
    }
  },
  pageContext: {
    next?: {
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
      }
    }
    prev?: {
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
      }
    }
  }
}

const BlogPost:React.SFC<iBlogPostProps> = props => {
  return (
    <Layout>
      <TemplateBlogPost
        title={props.data.markdownRemark.frontmatter.title}
        description={props.data.markdownRemark.frontmatter.description}
        content={props.data.markdownRemark.html}
        tags={props.data.markdownRemark.frontmatter.tags}
        isHtml={true}
        prevTitle={props.pageContext.prev.frontmatter.title}
        prevUri={props.pageContext.prev.fields.slug}
        nextTitle=""
        nextUri={props.pageContext.next.fields.slug}
      />
      <Container>
        <pre>56 {JSON.stringify(props, null, 2)}</pre>
      </Container>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
