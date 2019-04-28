<template>
  <div>
    <StoreHeader/>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/store/goods" replace>点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/store/ratings" replace>评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/store/info" replace>商家</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import {reqRatings,reqInfo,reqGoods} from '../../api'
  import {RECEIVE_RATINGS,RECEIVE_GOODS,RECEIVE_INFO} from '../../store/mutations-type'
  export default {
    async mounted(){
   const result=await Promise.all([reqRatings(),reqInfo(),reqGoods()])
   const ratings=result[0].data
    const info=result[1].data
    const goods=result[2].data
      // 提交mutation, 将数据保存到vuex的状态中
      this.$store.commit(RECEIVE_GOODS, {goods})
      this.$store.commit(RECEIVE_RATINGS, {ratings})
      this.$store.commit(RECEIVE_INFO, {info})
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  @import "../../commom/stylus/mixins.styl"
  .tab
    height 40px
    line-height 40px
    background #fff
    bottom-border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      float left
      width: 33.33333%
      text-align center
      font-size 14px
      color rgb(77, 85, 93)
      a
        display block
        position relative
        &.router-link-active
          color #02a774
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 35px
            height 2px
            transform translateX(-50%)
            background #02a774
</style>
