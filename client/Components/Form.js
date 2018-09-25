import React, { Component } from 'react'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
export default class Form extends Component {

    
  render() {
    return (
        <FormControl className = "submitForm" >
            <Input style = {{margin: "20px" }} placeholder = "Enter your email address" />
            <Input style = {{margin: "20px" }} placeholder = "Enter your password" type = "password" />
            <Button style = {{margin: "20px" }} variant = "contained" className = "formSubmitButton"> Enter </Button>
        </FormControl>
    )
  }
}
