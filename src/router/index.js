import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home'
import Page from '@/components/Pages/Page'
import child from '@/components/Pages/child'
import child2 from '@/components/Pages/child2'
import child3 from '@/components/Pages/child3'
import Menu from '@/components/Pages/menu'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/index', // 對應的虛擬路徑
      name: '首頁', // 元件呈現的名稱
      component: Home // 對應的元件
    },
    {
      path: '/page',
      // name: '分頁',
      // component: Page,
      components: { // components可以載入多個元件
        default: Page,
        menu: Menu
      },
      children: [
        {
          path: '',
          name: '卡片 1',
          component: child
        },
        {
          path: 'child2',
          name: '卡片 2',
          component: child2
        },
        {
          path: 'child3',
          name: '卡片 3',
          component: child3
        }
      ]
    }
  ]
})
