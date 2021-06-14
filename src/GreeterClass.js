/* eslint-disable react/prop-types */
import React from 'react'

export class GreeterClass extends React.Component {
  render () {
    const { name } = this.props

    return (
      <h1>
        Hello {name} (class)!
      </h1>
    )
  }
}

export default GreeterClass
