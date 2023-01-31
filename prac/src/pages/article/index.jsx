import React, { Component } from 'react'
import {Switch,Route ,Redirect} from 'react-router-dom'

import ArticleHome from './home'
import ArticleAdd from './article-add'
import ArticleDetail from './detail'
import './article.css'



export default class Article extends Component {
  render() {
    return (
      <Switch>
        <Route path='/admin/article' component={ArticleHome} exact></Route>
        <Route path='/admin/article/addupdate' component={ArticleAdd}></Route>
        <Route path='/admin/article/detail' component={ArticleDetail}></Route>
        <Redirect to= '/admin/article'></Redirect>
      </Switch>
    )
  }
}
