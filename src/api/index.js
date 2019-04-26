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
