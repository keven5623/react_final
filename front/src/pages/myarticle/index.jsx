import React, { Component } from 'react'
import {Switch,Route ,Redirect} from 'react-router-dom'

import MyArticleHome from './home'
import './article.css'



export default class MyArticle extends Component {
  render() {
    return (
      <Switch>
        <Route path='/admin/myarticle' component={MyArticleHome} exact></Route>
      </Switch>
    )
  }
}
