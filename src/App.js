import React from 'react'

import Greeter from './Greeter'
import GreeterClass from './GreeterClass'

export const App = () => {
  return (
    <div>
      <Greeter
        name={'Ola'}
      />
      <Greeter
        name={'Ala'}
      />
      <Greeter
        name={'Ela'}
      />
      <GreeterClass
        name={'Ola'}
      />
      <GreeterClass
        name={'Ala'}
      />
      <GreeterClass
        name={'Ela'}
      />
    </div>
  )
}

export default App
