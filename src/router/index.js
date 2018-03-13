import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import news from '@/components/list/news'
import info from '@/components/info/info'
import me from '@/components/me/me'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path: '/news',
      name: 'news',
      component: news
    },{
      path: '/info',
      name: 'info',
      component: info
    },{
      path: '/me',
      name: 'me',
      component: me
    }
  ]
})
