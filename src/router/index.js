import Vue from 'vue'
import Router from 'vue-router'

import Recommend from 'components/Recommend/Recommend'
import Rank from 'components/Rank/Rank'
import Search from 'components/Search/Search'
import Singer from 'components/Singer/Singer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/singer',
      component: Singer
    }
  ]
})
