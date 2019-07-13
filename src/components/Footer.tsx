import React from 'react'
import Container from './Container';

const Footer:React.SFC = (props) => {
  return (
    <footer>
      <Container id="footerContainer">
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Container>
    </footer>
  )
}

export default Footer
