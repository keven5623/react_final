import { message } from 'antd'
import axios from 'axios'


export default function ajax(url,data={},type='GET'){

    return new Promise((resolve,reject)=>{
        let promise
        //執行ajax請求
        if(type === 'GET'){
            promise = axios.get(url,{
                params:data
            })
            
        }else{
            promise = axios.post(url,data)
        }
        //請求成功調用resolve(value)
        promise.then(response=>{
            resolve(response.data);
        }).catch(error=>{
            message.error('請求出錯了'+error.message)
        })
    })

    
}