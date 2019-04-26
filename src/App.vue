<template>
  <div>
    <router-view/>
    <FooterGuide />
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide'
export default {
  async mounted(){
    this.$store.dispatch('getAdress')
  },
 components:{
   FooterGuide
  }
}
</script>

<style>

</style>
