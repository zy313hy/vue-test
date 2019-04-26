/*
能发送ajax请求的函数模块
封装axios
函数的返回值是promise
使用Promise封装axios的作用?
    1. 统一处理请求异常
    2. 异步返回的不是reponse, 而直接是response.data
 */
import axios from 'axios'

export default function ajax(url,data={},method='GET') {
  return new Promise((resolve,reject)=>{
    let Promise
    if (method==='GET'){
      Promise=axios.get(url,{params:data})
    }else {
      Promise=axios.post(url,data)
    }
    Promise.then(
      response=>{ // 如果成功调用reslove
        resolve(response.data)
      },
      err=>{
        alert('请求异常'+error.message)
      }
    )
  })
}
