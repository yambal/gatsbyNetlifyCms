import React from 'react'
import Container from '../Container';
import { HTMLContent, iHTMLContentProps } from '../Content';

interface iTemplateAboutPageProps extends iHTMLContentProps {
    title: string
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