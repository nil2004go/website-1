import keys from '../keys.json'

import Vue from 'vue'
import VueRouter from 'vue-router'
import vueHeadful from 'vue-headful'
import VueAnalytics from 'vue-analytics'

import App from './App.vue'
import Construction from './views/UnderConstruction.vue'
import CV from './views/CurriculumVitae.vue'

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
Vue.use(VueAnalytics, {
  id: keys.gstat.id,
  router
})

Vue.mixin(titleMixin)
Vue.mixin(loopTitleMixin)

Vue.component('vue-headful', vueHeadful);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')