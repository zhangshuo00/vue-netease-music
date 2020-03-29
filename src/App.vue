<template>
  <div id="app">
    <Header></Header>
    <section>
      <siderNav></siderNav>
      <router-view></router-view>
    </section>
    <footerAudio></footerAudio>
  </div>
</template>

<script>
import Sider from '@/components/Sider.vue'
import Header from '@/components/Header.vue'
import FooterAudio from '@/components/FooterAudio.vue'
export default {
  name: 'App',
  components:{
    "Header":Header,
    "siderNav":Sider,
    "footerAudio":FooterAudio
  }
}
</script>

<style>
#app {

}
body{
  margin:0 auto;
}
section{
  display:flex;
  flex-direction:row;
}
</style>
