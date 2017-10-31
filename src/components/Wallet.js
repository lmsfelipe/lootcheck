import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/balance'

export class Wallet extends Component{
  constructor(props){
    super(props)

    this.state = {
      balance: undefined
    }
  }

  updateBalance = event => {
    this.setState({
      balance: parseInt(event.target.value, 10)
    })
  }

  userDeposit = () => this.props.deposit(this.state.balance)
  userWithdraw = () => this.props.withdraw(this.state.balance)

  render(){
    return(
      <div>
        <h3 className='balance'>Wallet balance: {this.props.balance}</h3>
        <br />
        <input 
          className='input-wallet' 
          onChange={this.updateBalance}
        />
        <button className='btn-deposit' onClick={this.userDeposit}>Deposit</button>
        <button className='btn-withdraw' onClick={this.userWithdraw}>Withdraw</button>
      </div>
    )
  }
}

export default connect(state => ({ balance: state.balance }), { deposit, withdraw })(Wallet)