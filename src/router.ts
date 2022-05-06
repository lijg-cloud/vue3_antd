import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      meta: { index: 'home', name: '主页', subCat: '主页' },
      component: () => import('@pages/Home.vue')
    },
  ],
  history: createWebHashHistory()
})
