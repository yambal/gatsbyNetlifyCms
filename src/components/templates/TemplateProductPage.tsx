import React from 'react'
import Container from '../Container';
import { iProductPageProps } from '../../GatsbyNodeToTemplate/product-page'

const TemplateProductPage:React.SFC<iProductPageProps> = props => {
  return(
    <Container>
      <h2>{props.title}</h2>
      <div>{props.description}</div>
      <div>{props.heading}</div>
      <hr />
      <h3>{props.main.heading}</h3>
      <div>{props.main.heading}</div>
      <pre>{JSON.stringify(props.main.image1, null, 2)}</pre>
      <pre>{JSON.stringify(props.main.image2, null, 2)}</pre>
      <pre>{JSON.stringify(props.main.image3, null, 2)}</pre>
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
      <pre>{JSON.stringify(props.full_image, null, 2)}</pre>
    </Container>
  )
}

export default TemplateProductPage