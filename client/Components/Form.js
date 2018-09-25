import React, { Component } from 'react'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
export default class Form extends Component {
constructor() {
    super() 
    this.state = {
        email: "",
        password: ""
    }
}
    
  render() {
    return (
        <FormControl className = "submitForm" >
            <Input style = {{margin: "20px" }} placeholder = "Enter your email address"  onChange = {ev => this.setState({
                email: ev.target.value
            })}/>
            <Input style = {{margin: "20px" }} placeholder = "Enter your password" type = "password" onChange = {ev => this.setState({
                email: ev.target.value
            })}/>
            <Button style = {{margin: "20px" }} variant = "contained" className = "formSubmitButton"> Enter </Button>
        </FormControl>
    )
  }
}
