import React from 'react'

export interface iHTMLContentProps {
  content: any
  className?: string
  isHtml: boolean
}
export const HTMLContent:React.SFC<iHTMLContentProps> = (props) => (
  props.isHtml
    ? <div className={props.className} dangerouslySetInnerHTML={{ __html: props.content }} />
    : <div className={props.className}>{props.content}</div>
)