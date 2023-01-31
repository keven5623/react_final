import React, {PureComponent} from 'react'
import {
  Form,
  Tree,
  Input
} from 'antd'

import menuList from '../../config/menuConfig'

const Item = Form.Item
const { TreeNode } = Tree;
/*
設置角色權限的form组件
 */
export default class AuthForm extends PureComponent {

    constructor(props){
        super(props);

        const {menus} = this.props.role;
        console.log(menus)
        this.state = {checkedKeys:menus}
    }

    //給父組件提供最新menus
    getMenus=()=>this.state.checkedKeys

    getTreeNode=(menuList)=>{
        return menuList.reduce((pre,item)=>{
            pre.push(
            <TreeNode title={item.title} key={item.key}>
                {item.children ? this.getTreeNode(item.children): null}
            </TreeNode>)
            return pre
        },[])
    }

    //選中某個node的回調
    onCheck = checkedKeys => {
        console.log('onCheck', checkedKeys);
        this.setState({ checkedKeys });
      };

  componentWillMount(){
    this.treeNode = this.getTreeNode(menuList)
  }

  //根據新傳入的role來更新checkedKeys
  componentWillReceiveProps(nextProps){
    const menus = nextProps.role.menus;
    this.setState({checkedKeys:menus})
  }

  render() {
    const {role} = this.props
    const {checkedKeys} = this.state
    return (
      <div>
        <Item label='角色名稱'>
          <Input value={role.name} disabled/>
        </Item>

        <Tree
        checkable
        defaultExpandAll={true}
        checkedKeys={checkedKeys}
        onCheck={this.onCheck}
      >
        <TreeNode title="平台權限" key="all">
           { this.treeNode}
        </TreeNode>
      </Tree>
      </div>
    )
  }
}

