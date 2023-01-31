import React, { Component } from 'react'
import {Switch,Route ,Redirect} from 'react-router-dom'

import LessonHome from './home'
import LessonAdd from './lesson-add'
import LessonDetail from './detail'
import './lesson.css'



export default class Lesson extends Component {
  render() {
    return (
      <Switch>
        <Route path='/admin/lesson' component={LessonHome} exact></Route>
        <Route path='/admin/lesson/addupdate' component={LessonAdd}></Route>
        <Route path='/admin/lesson/detail' component={LessonDetail}></Route>
        <Redirect to= '/admin/lesson'></Redirect>
      </Switch>
    )
  }
}
