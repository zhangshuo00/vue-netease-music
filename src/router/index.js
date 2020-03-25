import Vue from 'vue'
import Router from 'vue-router'
import Discover from '@/components/Discover.vue'
import FM from '@/components/FM.vue'
import Viedo from '@/components/Viedo.vue'
import Friends from '@/components/Friends.vue'
import Setting from '@/components/Setting.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'Discover',component:Discover},
    {path:'/fm',name:'FM',component:FM},
    {path: '/viedo',name: 'Viedo',component:Viedo},
    {path: '/friends',name: 'Friends',component:Friends},
    {path: '/setting',name: 'Setting',component:Setting}
  ],
  mode:'history'
})
