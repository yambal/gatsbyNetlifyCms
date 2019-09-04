import React from 'react'
import Container from '../Container';
import CMSImage from '../CMSImage';
import BlogRoll from '../BlogRoll';
import { Link } from 'gatsby';
import { iIndexPageProps } from '../../GatsbyNodeToTemplate/index-page'
import styled from "styled-components"

const Title = styled.h1`
  color: red;
`

const TemplateIndexPage:React.SFC<iIndexPageProps> = props => {
  return(
    <Container>
      <Title >{props.title}</Title >
      <CMSImage imageInfo={props.image} />
      <h3>{props.subheading}</h3>
      <h1>{props.mainpitch.title}</h1>
      <h3>{props.mainpitch.description}</h3>
      <h3>{props.heading}</h3>
      <p>{props.description}</p>
      <h3>{props.intro.heading}</h3>
      <p>{props.intro.description}</p>
      {props.intro.blurbs.map((blurb, index) => (
      <div key={`blurb-${index}`}>
        <CMSImage imageInfo={blurb.image} />
        <p>{blurb.text}</p>
        <hr />
      </div>
      ))}

      <h3>BlogRoll</h3>
      <BlogRoll />
      <Link className="btn" to="/blog">
      Read more
      </Link>

    </Container>
  )
}

export default TemplateIndexPage