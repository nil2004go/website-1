import Vue from 'vue';
import router from './router';
import vueHeadful from 'vue-headful';
import VueAnalytics from 'vue-analytics';
import VueKonami from 'vue-konami';

import App from './App.vue';

import titleMixin from './components/mixins/titleMixin';
import loopTitleMixin from './components/mixins/loopTitleMixin';
import faviconMixin from './components/mixins/faviconMixin.js';

Vue.use(VueAnalytics, {
	id: 'UA-137498042-1',
	router
});
Vue.use(VueKonami);

Vue.mixin(titleMixin);
Vue.mixin(loopTitleMixin);
Vue.mixin(faviconMixin);

Vue.component('vue-headful', vueHeadful);

Vue.config.productionTip = false;

new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app');
