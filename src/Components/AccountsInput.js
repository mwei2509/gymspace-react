import React, { Component } from 'react';
import axios from 'axios'

export default class AccountsInput extends Component{
  constructor(){
    super()
    this.state={
      email: '',
      password: ''
    }
  }

  handleChange(field, event){
    this.setState({
      [field]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    axios
    .post('http://localhost:4000/accounts', {
      email: this.state.email,
      password: this.state.password
    })
    .then(({data})=>{
      debugger
    })
    .catch((errors)=>{
      console.log(errors)
      debugger
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        Email: <input type="text" value={this.state.email} onChange={this.handleChange.bind(this, "email")} /><br />
      Password: <input type="text" value={this.state.password} onChange={this.handleChange.bind(this, "password")}/>
    <button type="submit">Submit</button>
      </form>
    )
  }
}
