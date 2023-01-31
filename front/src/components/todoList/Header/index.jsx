import React, { Component } from 'react'

import './index.css'

export default class Header extends Component {

  handleKeyUp = ()=>{

  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="請輸入章節"/>
      </div>
    )
  }
}
