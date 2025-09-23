import React from 'react'

const ErrorMassage = ({items}) => {
   
  return (
    <div>
      {items.length === 0 && <h3> I am still hungry</h3> }
    </div>
  )
}

export default ErrorMassage
