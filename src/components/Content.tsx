import React from 'react'

interface iHTMLContentProps {
  content: string
  className?: string
}
export const HTMLContent:React.SFC<iHTMLContentProps> = (props) => (
  <div className={props.className} dangerouslySetInnerHTML={{ __html: props.content }} />
)

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

export default Content
