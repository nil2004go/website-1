import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Construction from './components/UnderConstruction.vue'
import CV from './components/CurriculumVitae.vue'

import titleMixin from './components/mixins/titleMixin'
import loopTitleMixin from './components/mixins/loopTitleMixin'

// Define routes
const routes = [{
    path: "/resume",
    name: "CV",
    component: CV
  },
  {
    path: "/",
    name: "home",
    component: Construction
  },
  {
    path: "*",
    name: "default",
    redirect: "/"
  }
];

// Make router
const router = new VueRouter({
  routes,
  mode: "history" // disable '#'
})

Vue.use(VueRouter)

Vue.mixin(titleMixin)
Vue.mixin(loopTitleMixin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')