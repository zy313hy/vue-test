<template>
  <div class="footer">
    <ul class="bottomList">
      <li class="footerItem " @click="go('/shop')" :class="{active: $route.path==='/shop'}"><i class="iconfont icon-u"></i><span>外卖</span></li>
      <li class="footerItem" @click="go('/search')" :class="{active: $route.path==='/search'}"><i class="iconfont icon-search"></i><span>搜索</span></li>
      <li class="footerItem" @click="go('/order')" :class="{active: $route.path==='/order'}"><i class="iconfont icon-dingdan"></i><span>订单</span></li>
      <li class="footerItem" @click="go('/profile')" :class="{active: $route.path==='/profile'}"><i class="iconfont icon-personal-data"></i><span>我的</span></li>
    </ul>
  </div>
</template>

<script>
  export default {
   methods:{
     go(path){
       this.$router.replace(path)
     }
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .footer
    position fixed
    height 50px
    width 100%
    background antiquewhite
    bottom 0
    .bottomList
      height 100%
      display flex
      justify-content center
      li
        display flex
        align-items center
        flex-direction column
        justify-content space-around
        flex 1
        &.active
          color #02a774
</style>
