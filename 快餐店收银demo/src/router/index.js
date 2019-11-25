import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/Pos'
import Tableorder from '@/components/page/Tableorder'
import Goodstable from '@/components/page/Goodstable'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: Pos,
        Tableorder: Tableorder,
        Goodstable: Goodstable
      }
    }
  ]
})
