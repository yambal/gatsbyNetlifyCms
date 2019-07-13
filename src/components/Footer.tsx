import React from 'react'
import Container from './Container';
import { string } from 'postcss-selector-parser';

interface iFooterProps {
  id?: string
  className?: string
}

const Footer:React.SFC<iFooterProps> = (props) => {
  return (
    <footer id={props.id} className={props.className}>
      <Container id="footerContainer">
        Footer
      </Container>
    </footer>
  )
}

export default Footer
