import { graphql, useStaticQuery } from 'gatsby'

type tSiteMetaData = {
  title: string
  description: string
  lang: string
}

class UtilitySite {
  static siteMetaData = ():tSiteMetaData => {
    const { site } = useStaticQuery(
      graphql`
        query UtilitySite_SiteMetaData {
          site {
            siteMetadata {
              title
              description,
              lang
            }
          }
        }
      `
    )
  return site.siteMetadata
  }
}

export default UtilitySite
