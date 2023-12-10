import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/LandingView.vue'
import SignIn from '../views/Sign.vue'
import SignUp from '../views/SignUp.vue'


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
    }
  ]
})

export default router
