import React from 'react'
import Img from 'gatsby-image'

export interface iImageInfo {
  alt?: string
  image?: any
  childImageSharp?: {
    fluid: any
  }
}

interface iPreviewCompatibleImageProps {
  imageInfo: iImageInfo
}

const PreviewCompatibleImage:React.SFC<iPreviewCompatibleImageProps> = (props) => {
  const { alt = '', childImageSharp, image } = props.imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img fluid={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    return <Img fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return <img src={image} alt={alt} />

  return null
}

export default PreviewCompatibleImage
