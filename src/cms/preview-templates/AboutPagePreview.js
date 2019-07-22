import React from 'react'
import { AboutPageTemplate } from '../../GatsbyNodeToTemplate/about-page'

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    isHtml={false}
  />
)

export default AboutPagePreview
