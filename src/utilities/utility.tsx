import { graphql, useStaticQuery } from 'gatsby'

interface siteMetadata {
  title: string
  description: string
}

class Utilities {
  static siteMetaData = ():siteMetadata => {
    const { site } = useStaticQuery(
      graphql`
        query Utilities_SiteMetaData {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `
    )
    return {
      title: site.siteMetadata.title,
      description: site.siteMetadata.description
    }
  }
}

export default Utilities