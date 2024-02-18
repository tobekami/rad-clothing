import React from 'react'
import "./button.styles.scss"

const Button = ({children, buttonType, ...otherProps}) => {
  return (
    <div>
    <button className= {`button-container ${buttonType}`}
    {...otherProps}>
    {children}
    </button>
    </div>
  )
}

export default Button