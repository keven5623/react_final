import React, { Component } from 'react'
import {Card,Input,Button,Icon,Table,Select} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import LinkButton from '../../components/link-button'
import {reqProducts,reqSearchArticle} from '../../api'
import {PAGE_SIZE}  from '../../utils/constant'
import storageUtils from '../../utils/storageUtils'



const element = <FontAwesomeIcon icon={faEye} />
const element1 = <FontAwesomeIcon icon={faEye}  style={{color:'gray',opacity:0.2}}/>

const Option = Select.Option;
export default class MyArticleHome extends Component {
  
  state = {
    total:0,
    article:[],
    loading:false,
    searchName:'',//搜索的關鍵字
    searchType:'productName',//根據什麼來搜索
  }

  //初始化table的列的數組
  initColumns = () => {
    this.columns = [
      {
        width:300,
        title: '文章標題',
        dataIndex: 'name',
      },
      {
        width:300,
        title: '文章作者',
        dataIndex: 'author',
      },
      {
        width:300,
        title: '發布日期',
        dataIndex: 'update',
      },
     
    ];
  }

  //獲取指定頁碼的列表數據顯示
  getArticle = async(pageNum)=>{
    const {username} = storageUtils.getUser()
    this.pageNum = pageNum 
    this.setState({loading:true});
    
    const result = await reqProducts(pageNum , PAGE_SIZE,username);
    console.log(result)
    
    this.setState({loading:false})
    if(result.status === 0){
      const {total,list} = result.data;
      this.setState({
        total,
        article:list
      })
    }
  }

  componentWillMount(){
    this.initColumns();
  }

  componentDidMount(){
    this.getArticle(1);
  }

  render() {

    const {article,total,loading} = this.state;

    
    return (
      
        <Table 
        bordered
        loading={loading}
        rowKey='_id'
        dataSource={article} 
        columns={this.columns}
        pagination={{
          current:this.pageNum,
          total:total,
          defaultPageSize:PAGE_SIZE,
          showQuickJumper:true,
          onChange:(pageNum)=>{this.getArticle(pageNum)},
          current:this.pageNum,
        }}
        />

      
    )
  }
}
