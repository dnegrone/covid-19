import React from 'react';
import API from './services/api'
import Clock from './component/clock'
import Covid from './component/covid'

const App = () => {
  return(
    <>
      <Clock />
      <Covid />
    </>
  )
}

export default App;
