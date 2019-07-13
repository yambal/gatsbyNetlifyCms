import React from 'react'

interface iContainerProps {
  id?: string
  className?: string
}

const Container:React.SFC<iContainerProps> = (props) => {
  const tailwindClasses = ['container', 'px-baseGutter', 'mx-auto']
  const classNameClasses = props.className ? props.className.split(' ') : []
  return (
    <div id={props.id} className={tailwindClasses.concat(classNameClasses).join(' ')}>
      {props.children}
    </div>
  )
}

export default Container
