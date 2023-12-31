import React from 'react'
import classes from './Button.module.css'

function Button(props) {
  return (
    <button
    type={props.type || 'button'}
    className={`${classes['shadow__btn']} ${props.className}`}
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.children}
  </button>
  )
}

export default Button
