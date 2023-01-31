import React, { Component } from 'react'

import Header from './Header'
import List from './List'
import Footer from './Footer'
import './index.css'

export default class TodoList extends Component {

  state={todos:[
      {id:1,name:'吃飯'},
      {id:2,name:'睡覺'},
      {id:3,name:'打'},
    ]}

  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header/>
          <List todos={todos}/>
          <Footer/>
        </div>
      </div>
    )
  }
}
