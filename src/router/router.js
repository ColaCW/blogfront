import Vue from 'vue'
import Router from 'vue-router'
import BlogIndex from '@/components/BlogIndex'
import BlogList from '@/components/BlogList'
import BlogDetail from '@/components/BlogDetail'
import ResourceShare from '@/components/ResourceShare'
import WebIntroduce from '@/components/WebIntroduce'
import AboutMe from '@/components/AboutMe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlogIndex',
      component: BlogIndex
    },
    {
      path: '/BlogList/:categary',
      name: 'BlogList',
      component: BlogList
    },
    {
      path: '/BlogDetail/:id',
      name: 'BlogDetail',
      component: BlogDetail
    },
    {
      path: '/ResourceShare',
      name: 'ResourceShare',
      component: ResourceShare
    },
    {
      path: '/WebIntroduce',
      name: 'WebIntroduce',
      component: WebIntroduce
    },
    {
      path: '/AboutMe',
      name: 'AboutMe',
      component: AboutMe
    },
  ]
})
