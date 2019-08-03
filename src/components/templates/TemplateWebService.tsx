import React from 'react'
import Container from '../Container';
import { HTMLContent, iHTMLContentProps } from '../Content';
import { Link } from 'gatsby';

interface iTemplateBlogPost extends iHTMLContentProps {
    title: string
    description: string
    tags: string[]
    nextTitle?: string
    nextUri?: string
    prevTitle?: string
    prevUri?: string
}

const TemplateBlogPost:React.SFC<iTemplateBlogPost> = props => {
  return(
    <Container>
      <h2>{props.title}</h2>
      <div>{props.description}</div>
      <div>{props.tags.join(', ')}</div>
      <HTMLContent
        className={props.className}
        content={props.content}
        isHtml={props.isHtml}
      />
      {props.prevTitle && <Link to={props.prevUri}>{props.prevTitle}</Link>}
      {props.nextTitle && <Link to={props.nextUri}>{props.nextTitle}</Link>}
    </Container>
  )
}

export default TemplateBlogPost