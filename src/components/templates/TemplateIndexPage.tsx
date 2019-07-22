import React from 'react'
import Container from '../Container';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import BlogRoll from '../BlogRoll';
import { Link } from 'gatsby';

interface iTemplateIndexPageProps {
  title: string
  image: any
  subheading: string
  mainpitch: {
    title: string
    description: string
  }
  heading: string
  description: string
  intro: {
    heading: string
    description: string
    blurbs: {
      image: any
      text: string
    }[]
  }
}

const TemplateIndexPage:React.SFC<iTemplateIndexPageProps> = props => {
  return(
    <Container>
      <h1>{props.title}</h1>
      <PreviewCompatibleImage imageInfo={props.image} />
      <h3>{props.subheading}</h3>
      <h1>{props.mainpitch.title}</h1>
      <h3>{props.mainpitch.description}</h3>
      <h3>{props.heading}</h3>
      <p>{props.description}</p>
      <h3>{props.intro.heading}</h3>
      <p>{props.intro.description}</p>
      {props.intro.blurbs.map((blurb, index) => (
      <div key={`blurb-${index}`}>
          <PreviewCompatibleImage imageInfo={blurb.image} />
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