import React from 'react'
import Container from '../Container';
import { HTMLContent } from '../Content';

interface iTemplateAboutPageProps {
    title: string
    className?: string
    content: any
    isHtml: boolean
}

const TemplateAboutPage:React.SFC<iTemplateAboutPageProps> = props => {
    return(
      <Container>
        <h2>{props.title}</h2>
        <HTMLContent
            className={props.className}
            content={props.content}
            isHtml={props.isHtml}
        />
      </Container>
    )
}

export default TemplateAboutPage