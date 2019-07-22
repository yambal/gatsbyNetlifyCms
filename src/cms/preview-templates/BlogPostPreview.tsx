import React from 'react'
import PropTypes from 'prop-types'
import TemplateBlogPost from '../../components/templates/TemplateBlogPost';

const BlogPostPreview = ({ entry, widgetFor }) => (
  <TemplateBlogPost
    title={entry.getIn(['data', 'title'])}
    description={entry.getIn(['data', 'description'])}
    content={widgetFor('body')}
    tags={entry.getIn(['data', 'tags'])}
    isHtml={false}
  />

)

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview