import React, { Component } from 'react'
import {render} from 'react-dom'
import Navbar from './Navbar'
import CardIndexPage from './Card'
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <CardIndexPage />
      </div>
    )
  }
}

