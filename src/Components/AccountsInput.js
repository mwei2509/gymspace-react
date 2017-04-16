import React, { Component } from 'react';
import axios from 'axios'

export default class AccountsInput extends Component{
  constructor(){
    super()
    this.state={
      email: '',
      password: '',
      errors: false,
      error:""
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
      this.props.submitAccount()
    })
    .catch(({data})=>{
      debugger
      this.setState({
        errors: true,
        error: data
      },()=>{console.log(data)})
    })
  }

  render(){
    return(
      <div>
        {this.state.errors ? <span>{this.state.error}</span> : null}
      <form onSubmit={this.handleSubmit.bind(this)}>
        Email: <input type="text" value={this.state.email} onChange={this.handleChange.bind(this, "email")} /><br />
      Password: <input type="text" value={this.state.password} onChange={this.handleChange.bind(this, "password")}/>
    <button type="submit">Submit</button>
      </form>
      </div>
    )
  }
}
