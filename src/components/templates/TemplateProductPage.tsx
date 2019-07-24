import React from 'react'
import Container from '../Container';
import { iProductPageProps } from '../../GatsbyNodeToTemplate/product-page'
import CMSImage from '../CMSImage';

const TemplateProductPage:React.SFC<iProductPageProps> = props => {
  return(
    <Container>
      <h2>{props.title}</h2>
      <div>{props.description}</div>
      <div>{props.heading}</div>
      <hr />
      <h3>{props.main.heading}</h3>
      <div>{props.main.heading}</div>
      <CMSImage imageInfo={props.main.image1} />
      <CMSImage imageInfo={props.main.image2} />
      <CMSImage imageInfo={props.main.image3} />
      {props.testimonials.map((testimonial, index) => {
        return (
          <div key={index}>
            <h3>{testimonial.quote}</h3>
            <p>{testimonial.author}</p>
          </div>
        )
      })}
      <h3>{props.pricing.heading}</h3>
      <p>{props.pricing.description}</p>
      <p>pricingPlansPlan:{JSON.stringify(props.pricing.plans)}</p>
      <CMSImage imageInfo={props.full_image} />
    </Container>
  )
}

export default TemplateProductPage