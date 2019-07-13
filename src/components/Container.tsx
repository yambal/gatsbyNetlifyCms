import React from 'react'
import Utility from '../utilities/Utility'

interface iContainerProps {
  id?: string
  className?: string
}

const Container:React.SFC<iContainerProps> = (props) => {
  const className = Utility.classNameBuild(['container', 'px-20', 'mx-auto'], props.className)
  return (
    <div id={props.id} className={className}>
      {props.children}
    </div>
  )
}

export default Container
