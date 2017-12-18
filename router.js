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
        path: '/detail/:id',
        component: detailhome,
        children: [
          // UserHome will be rendered inside User's <router-view>
          // when /user/:id is matched
          {
            path: '',
            component: detailid
          },

          // ...other sub routes
        ]
      },

      {
        path: '/detail',
        component: detail
      }
    ]
  })
}
