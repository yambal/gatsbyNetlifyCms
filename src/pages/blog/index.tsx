import React from 'react'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import Container from '../../components/Container';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <BlogRoll />
        </Container>
      </Layout>
    )
  }
}
