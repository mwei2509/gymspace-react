import React, { Component } from 'react';
import axios from 'axios'
import AccountsInput from './AccountsInput'

export default class Accounts extends Component{
  constructor(){
    super()
    this.state={
      accounts: []
    }
  }
  componentWillMount(){
    axios
    .get('http://localhost:4000/accounts')
    .then(({data})=>{
      this.setState({
        accounts: data
      })
    })
  }



  test(){
    debugger
  }
  render(){

    return(
      <div>
        <AccountsInput />
        {this.state.accounts.map((account, index)=>{
          return(
            <li key={index}>
              {account.email}
            </li>)
        })}
      </div>
    )
  }
}
