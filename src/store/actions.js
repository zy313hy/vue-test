/*
包含多个更改状态的方法
 */
import {reqAddress,reqCategorys,reqShops} from  '../api'
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutations-type'
// import state from './state'
export default {
 // 获取地址
 async getAddress({commit,state}){
    const {longitude,latitude}=state
    const result=await reqAddress(longitude,latitude)
    if(result.code===0){
      const address=result.data
      commit(RECEIVE_ADDRESS,address)
    }
  },
  async getCategorys({commit}){
    const result=await reqCategorys()
    if(result.code===0){
      const categorys=result.data
      commit(RECEIVE_CATEGORYS,categorys)
    }
  },
  async getShops({commit,state}){
    const {longitude,latitude}=state
    const result=await reqShops({longitude,latitude})
    if(result.code===0){
      const shops=result.data
      commit(RECEIVE_SHOPS,shops)
    }
  },
}
