import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: '國立科技高中-社團介紹首頁'
      }
    },
    {
      path: '/guitar',
      name: 'guitar',
      component: () => import('@/views/GuitarHistory.vue'),
      meta: {
        title: '吉他社社史'
      }
    },
    {
      path: '/guitar/events',
      name: 'guitar-events',
      component: () => import('@/views/GuitarEvents.vue'),
      meta: {
        title: '吉他社近期活動公告'
      }
    },
    {
      path: '/guitar/teach',
      name: 'guitar-teach',
      component: () => import('@/views/GuitarTeach.vue'),
      meta: {
        title: '吉他社教學內容'
      }
    },
    {
      path: '/prepare',
      name: 'prepare',
      component: () => import('@/views/NotReady.vue'),
      alias: [
        // 這邊的路徑也同時使用上面的原件 mport('@/views/NotReady.vue')
        // 除了 /prepare 定義路徑以外，這些路徑也套用這個設定
        // 注意在這些路徑換頁時會被當作在同一個路由
        '/dance',
        '/baseball',
        '/soccer',
        '/badminton',
        '/scout'
      ],
      meta: {
        title: '準備中'
      }
    },
    {
      path: '/404',
      name: 'not-found',
      component: () => import('@/views/NotFound.vue'),
      meta: {
        title: '404'
      }
    },
    {
      // /:catchAll 以上都不符合的其他路徑，捕捉所有不符合的路由， 重新導向(redirect)404路由
      path: '/:catchAll(.*)',
      name: 'all',
      redirect: '/404'
    }

  ]
})

//  to 去哪裡 from 從哪來
router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
