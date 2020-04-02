// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import APlayer from '@moefe/vue-aplayer'
import axios from 'axios'
import './axios/axios'
// import apiConfig from '../config/api.config'

Vue.config.productionTip = false

Vue.use(APlayer, {
  defaultCover: "https://p1.music.126.net/GMy_E4iX4_IVWGHMw5bwZw==/109951164685568806.jpg", // 设置播放器默认封面图片
  productionTip: false, // 是否在控制台输出版本信息
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
