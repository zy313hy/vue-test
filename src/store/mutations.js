/*
包含n个用于直接更新状态数据的方法的对象
 */
import {RECEIVE_ADDRESS,RECEIVE_SHOPS,RECEIVE_CATEGORYS,RECEIVE_USER,RESET_USER,RECEIVE_GOODS,RECEIVE_INFO,RECEIVE_RATINGS} from './mutations-type'

export default {
  [RECEIVE_ADDRESS](state,address){
    state.address=address
  },
  [RECEIVE_CATEGORYS](state,categorys){
    state.categorys=categorys
  },
  [RECEIVE_SHOPS](state,shops){
    state.shops=shops
  },
  [RECEIVE_USER](state,user){
    state.user=user
  },
  [RESET_USER](state,user){
    state.user={}
  },
  [RECEIVE_INFO](state,{info}){
    state.info=info
  },
  [RECEIVE_GOODS](state,{goods}){
    state.goods=goods
  },
  [RECEIVE_RATINGS](state,{ratings}){
    state.ratings=ratings
  },
}
