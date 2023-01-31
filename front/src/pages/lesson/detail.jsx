import React, { Component } from 'react'
import {Card,Icon,List} from 'antd'

import LinkButton from '../../components/link-button'
import storageUtils from '../../utils/storageUtils'

const Item = List.Item
export default class LessonDetail extends Component {
  render() {
    const {name,author,detail,_id} = this.props.location.state.article;
    storageUtils.saveWatch(_id);
    const title = (
      <span>
        <LinkButton>
          <Icon type='arrow-left' 
          style={{marginRight:15,fontSize:20}}
          onClick={()=>{this.props.history.goBack()}}
          ></Icon>
        </LinkButton>
        <span>課程內容</span>
      </span>
    )
    return (
      <Card title={title} className='article-detail'>
        <List itemLayout='vertical'>
          <Item>
            <span className='left'>課程標題:</span>
            <span>{name}</span>
          </Item>
          <Item>
            <span className='left'>課程作者:</span>
            <span>{author}</span>
          </Item>
          <Item> 
            <div className='left'>課程內容:</div>
            <video width="320" height="240" src={detail} controls>
              Your browser does not support the video tag.
            </video>
          </Item>
        </List>
      </Card>
    )
  }
}
