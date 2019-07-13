import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from './Footer'
import Navbar from './Navbar'
import '../css/dist/layout.scss'
import UtilitiySite from '../utilities/UtilitiySite'

const TemplateWrapper:React.SFC = ({ children }) => {
  const siteMetadata = UtilitiySite.siteMetaData()
  return (
    <React.Fragment>
      <Helmet>
        <html lang={siteMetadata.lang} />
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP|Noto+Serif+JP|Source+Code+Pro&display=swap"
          rel="stylesheet"
        />

        {/** TODO */ false &&
          <>
            <meta property="og:type" content="business.business" />
            <meta property="og:title" content={siteMetadata.title} />
            <meta property="og:url" content="/" />
            <meta property="og:image" content="/img/og-image.jpg" />
          </>
        }
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </React.Fragment>
  )
}

export default TemplateWrapper
