<template>
  <div id="app">
    <Header></Header>
    <siderNav></siderNav>
    <router-view></router-view>
  </div>
</template>

<script>
import Sider from '@/components/Sider.vue'
import Header from '@/components/Header.vue'
export default {
  name: 'App',
  components:{
    "Header":Header,
    "siderNav":Sider
  }
}
</script>

<style>
#app {

}
body{
  margin:0 auto;
}
</style>
