import React from 'react'
import '../index.css'
const Button = (props) => {
  return (
      <button className='btn'>{props.children}</button>
  )
}

export default Button
