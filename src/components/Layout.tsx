import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from './Footer'
import Navbar from './Navbar'
import '../css/dist/layout.scss'
import Utilities from '../utilities/utility'

const TemplateWrapper:React.SFC = ({ children }) => {
  const siteMetaData = Utilities.siteMetaData()
  return (
    <React.Fragment>
      <Helmet>
        <html lang="ja" />
        <title>{siteMetaData.title}</title>
        <meta name="description" content={siteMetaData.description} />
        <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32"/>
        <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16"/>
        <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400"/>
        <meta name="theme-color" content="#fff" />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </React.Fragment>
  )
}

export default TemplateWrapper
