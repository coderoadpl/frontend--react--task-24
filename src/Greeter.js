/* eslint-disable react/prop-types */
import React from 'react'

export const Greeter = (props) => {
  const { name } = props

  return (
    <h1>
      Hello {name}!
    </h1>
  )
}

export default Greeter
