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

  getAccounts(){
    axios
    .get('http://localhost:4000/accounts')
    .then(({data})=>{
      this.setState({
        accounts: data
      })
    })
  }

  componentWillMount(){
    this.getAccounts()
  }

  submitAccount(){
    this.getAccounts()
  }


  test(){
    debugger
  }
  render(){

    return(
      <div>
        <AccountsInput
          submitAccount={this.submitAccount.bind(this)} />
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
