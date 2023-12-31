import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/LandingView.vue'
import SignIn from '../views/Sign.vue'
import SignUp from '../views/SignUp.vue'
import Main from '../views/Main.vue'
import MainPanel from '../views/MainPanel.vue'
import MainServises from '@/views/MainServises.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/sign-up',
      name: 'SignUpViews',
      component: SignUp
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/main-panel',
          name: 'MainPanel',
          component: MainPanel
        },
        {
          path: '/main-servises',
          name: 'MainServises',
          component: MainServises
        }
      ]
    },
    
  ]
}) 

export default router