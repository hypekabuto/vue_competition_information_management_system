import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from "vue-router";
import router from "@/router";
import store from "@/store";
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
// router.beforeEach((to, from, next) => {
//
//   const userRole = getCurrentUserRole();
//
//   if (userRole === 'student' || userRole === 'teacher') {
//
//     if (to.path.startsWith('/admin')) {
//       next('/dashboard');
//     } else {
//       next(); // 否则，继续导航
//     }
//   } else if (userRole === 'admin') {
//     if (!to.path.startsWith('/admin')) {
//       next('/admin/dashboard');
//     } else {
//       next();
//     }
//   } else {
//     next('/login');
//   }
// });
router.beforeEach((to,from,next) =>{
  const isAuthenticated = () => {
    return localStorage.getItem('Authorization') !== null
  }
  if (to.path === '/logIn' || isAuthenticated()) {
    next();
  } else {
    next('/logIn');
  }
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
