/*
包含n个接口请求函数的模块
调用ajax函数发请求
函数的返回值是promise
 */
import ajax from './ajax'

const base='/api'
export const reqAddress=(longitude,latitude)=>ajax(base+`/position/${latitude},${longitude}`)

export const reqCategorys=()=>ajax(base+'/index_category')

export const reqShops=({longitude,latitude})=>ajax(base+'/shops',{longitude,latitude})

//图片验证登录
export const reqPasswordLogin=({name,pwd,captcha})=>ajax(base+'/login_pwd',{name,pwd,captcha},'POST')
//获取用户信息
export const reqUser=()=>ajax(base+'/userinfo')
//退出登录
export const reqLogout=()=>ajax(base+'/logout')
//获取shopgoods
export const reqGoods=()=>ajax('/goods')
export const reqRatings=()=>ajax('/ratings')
export const reqInfo=()=>ajax('/info')

