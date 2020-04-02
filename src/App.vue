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
  position: relative;
}
body{
  margin:0 auto;
}
section{
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction:row;
  flex:1;
}
</style>
