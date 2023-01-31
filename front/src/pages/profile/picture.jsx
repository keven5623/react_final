import React from 'react';
import { Upload, Icon, Modal, message } from 'antd';
import {reqDeleteImg} from '../../api/index'

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
} 

export default class PicturesWall extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [
      
    ],
  };

  //獲取已上傳文件名字的數組
  getImg=()=>{
    return this.state.fileList.map(file => file.name)
}


  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  //file:當前操作的文件(上傳/刪除)
  //fileList:所有已上傳的文件
  handleChange = async({ file,fileList }) => {

    //一旦上傳成功，修正file的值(name,url)
    if(file.status ==='done'){
        const result = file.response //{status:0,data:{name:'xxx.jpg,url:圖片地址}}
        if(result.status===0){
            message.success('上傳圖片成功')
            const {name,url} = result.data
            file = fileList[fileList.length-1]
            file.name = name
            file.url=url
        }else{
            message.error('上傳圖片失敗')
        }
    }else if(file.status ==='removed'){//刪除圖片
        const result = await reqDeleteImg(file.name)
        if(result.status ===0){
            message.success('刪除圖片成功')
        }else{
            message.error('刪除圖片失敗')
        }
    }   



    this.setState({ fileList })
  };

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          action="/api1/manage/img/upload"//上傳圖片的街口地址
          name='image' // 街口請求的參數名
          accept='video/*,image/*'//上傳圖片的格式
          listType="picture-card"
          fileList={fileList} //已上傳文件的列表
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

