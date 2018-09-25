import React, { Component } from 'react'
import Form from './Form'
export default class CardIndexPage extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
    }
  }

  render() {
    return (
        <div className = "card-container">
          <div className = "box">
            <div className = "image">
                <div className = "imageText" >
                <span className = "imgSpan">Still <br />travelling <br />alone?<br /></span>
                
                </div>
            </div>
            <div className = "form">
                <span className = "howAbout">Let us find you a buddy to travel with</span>
                <Form />
            </div>
          </div>
        </div>
    )
  }
}
