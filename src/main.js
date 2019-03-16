import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import titleMixin from './components/mixins/titleMixin'
Vue.mixin(titleMixin)

import loopTitleMixin from './components/mixins/loopTitleMixin'
Vue.mixin(loopTitleMixin)

new Vue({
  render: h => h(App),
}).$mount('#app')