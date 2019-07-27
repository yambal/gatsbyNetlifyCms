import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import Container from '../../components/Container';
import CMSImage from '../../components/CMSImage';

const InstagramIndexPage:React.SFC<iInstagramIndexData> = props => {
  const { edges } = props.data.allInstaNode
  return(
    <Layout>
      <Container>
        {edges.map(( edge: any, index:number ) => {
          const node: iInstaNode = edge.node
          return(
            <div key={node.id}>
              <CMSImage imageInfo={node.localFile} />
              <p>{node.caption}</p>
              <p>Likes: {node.likes}</p>
              <p>timestamp: {node.timestamp}</p>
              <p>username: {node.username}</p>
              <p>original: {node.original}</p>
              <p>https://www.instagram.com/p/{node.id}/?utm_source=ig_web_button_share_sheet</p>
            </div>
          )
        })}
      </Container>
    </Layout>
  )
}
export default InstagramIndexPage

interface iInstaNode {
  username: string
  caption: string
  timestamp: number
  id: string
  mediaType: string
  localFile: {
    publicURL: string
    childImageSharp: any
  }
  likes: number
  original: string
}

interface iInstagramIndexData {
  location?: any
  data: {
    allInstaNode: {
      edges: iInstaNode[]
    }
  }
}

export const InstagramIndexPageQuery = graphql`
  query InstagramIndexQuery {
    allInstaNode(sort: {fields: timestamp, order: DESC}, filter: {mediaType: {eq: "GraphImage"}}, limit: 100) {
      edges {
        node {
          username
          caption
          timestamp
          id
          mediaType
          localFile {
            publicURL
            childImageSharp {
              id
              fluid(traceSVG: {color: "10"}) {
                tracedSVG
                aspectRatio
                src
                srcSet
                sizes
                originalImg
                originalName
                presentationWidth
                presentationHeight
              }
            }
          }
          likes
          original
        }
      }
    }
  }
`


  