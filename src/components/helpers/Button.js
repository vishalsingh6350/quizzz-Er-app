import React from 'react'

const Button = ({text,functionOnClick}) => {
   return (
      <button className='button' onClick={functionOnClick}>{text}</button>
   )
}

export default Button
