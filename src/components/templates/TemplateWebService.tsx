import React from 'react'
import Container from '../Container';
import { HTMLContent, iHTMLContentProps } from '../Content';
import { Link } from 'gatsby';

interface iTemplateWebServiceProps extends iHTMLContentProps {
    title: string
    description: string
    tags: string[]
}

const TemplateWebService:React.SFC<iTemplateWebServiceProps> = props => {
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
    </Container>
  )
}

export default TemplateWebService