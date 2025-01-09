import React from 'react'

const Button = (props) => {
  return (
    <button className='btn'><div className='btn-ping btn-ping_dot'></div> {props.text} </button>
  )
}

export default Button ;