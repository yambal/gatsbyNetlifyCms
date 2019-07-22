import React from 'react'
import TemplateAboutPage from '../../components/templates/TemplateAboutPage';

const AboutPagePreview = ({ entry, widgetFor }) => (
  <TemplateAboutPage
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    isHtml={false}
  />
)

export default AboutPagePreview
