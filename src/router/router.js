import Vue from 'vue'
import Router from 'vue-router'
import BlogList from '@/components/BlogList'
import BlogDetail from '@/components/BlogDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlogList',
      component: BlogList
    },
    {
      path: '/BlogDetail',
      name: 'BlogDetail',
      component: BlogDetail
    },
  ]
})
