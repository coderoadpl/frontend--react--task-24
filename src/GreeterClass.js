/* eslint-disable react/prop-types */
import React from 'react'

export class GreeterClass extends React.Component {
  render () {
    return (
      <h1>
        Hello {this.props.name} (class)!
      </h1>
    )
  }
}

export default GreeterClass
