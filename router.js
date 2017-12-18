import Vue from 'vue'
import Router from 'vue-router'

import home from '~/pages/index'
import detail from '~/pages/detail'
import detailhome from '~/pages/detail/index'
import detailid from '~/pages/detail/_id'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: home
      },
      {
        path: '/detail',
        component: detail,
        children: [{
            path: '',
            component: detailhome
          },
        //   { 
        //     path: ':id',
        //     component: detailid
        //   }
        ]
      },
      {
        path: '/detail/:id',
        component: detail,
        children: [
          {
            path: '',
            component: detailid
          }
        ]
      }
    ]
  })
}
