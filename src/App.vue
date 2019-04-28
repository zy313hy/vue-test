<template>
  <div>
    <router-view/>
    <FooterGuide v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/footerguide/FooterGuide'

// import Vue from 'vue';
// import Mint from 'mint-ui';
// Vue.use(Mint);
export default {
  async mounted(){
    this.$store.dispatch('getAddress')
    this.$store.dispatch('getUser')
  },
 components:{
   FooterGuide,
  }
}
</script>

<style>

</style>
