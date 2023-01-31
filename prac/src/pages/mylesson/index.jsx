import React, { Component } from 'react'
import {Switch,Route ,Redirect} from 'react-router-dom'

import MyLessonHome from './home'



export default class MyLesson extends Component {
  render() {
    return (
      <Switch>
        <Route path='/admin/mylesson' component={MyLessonHome} exact></Route>
      </Switch>
    )
  }
}
