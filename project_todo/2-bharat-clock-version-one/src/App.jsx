import React from 'react'
import './App.css'
import ClockHeading from './components/ClockHeading'
import ClockSlogan from './components/ClockSlogan'
import CurrentTime from './components/CurrentTime'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <center>
  <ClockHeading/>
  <ClockSlogan/>
  <CurrentTime/>
    </center>
  )
}

export default App

