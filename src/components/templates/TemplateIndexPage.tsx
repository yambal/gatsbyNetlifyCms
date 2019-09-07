import React from 'react'
// import Container from '../Container';
import Container from '@material-ui/core/Container';
import CMSImage from '../CMSImage';
import BlogRoll from '../BlogRoll';
import { Link } from 'gatsby';
import { iIndexPageProps } from '../../GatsbyNodeToTemplate/index-page'
import styled from "styled-components"

interface iJumboTron {
  backgroundImage?: string
  colors?: {
    darkMuted: string
    darkVibrant: string
    lightMuted: string
    lightVibrant: string
    muted: string
    vibrant: string
  }
}

const JumboTron = styled.div<iJumboTron>`
  width: 100vw;
  height: 56vw;
  ${props => props.backgroundImage ? `background-image: url(${props.backgroundImage});` : null}
  color: ${props => props.colors ? props.colors.lightMuted: null};
`

const TemplateIndexPage:React.SFC<iIndexPageProps> = props => {

  return(
    <React.Fragment>
      <JumboTron
        backgroundImage={props.image.publicURL}
        colors={props.image.colors}>
          <Container fixed>
            <div>{props.title}</div>
            <div>{props.subheading}</div>
          </Container>
      </JumboTron>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    <Container fixed>
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
    </React.Fragment>
  )
}

export default TemplateIndexPage