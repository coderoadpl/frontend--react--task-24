import React from 'react'

import Greeter from './Greeter'

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
    </div>
  )
}

export default App
