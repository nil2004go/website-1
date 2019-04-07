import Vue from 'vue';
import Router from 'vue-router';
import Construction from './views/UnderConstruction.vue';
import CV from './views/CurriculumVitae.vue';
import Credits from './views/Credits.vue';

Vue.use(Router);

const routes = [
	{
		path: '/',
		name: 'home',
		component: Construction
	},
	{
		path: '/resume',
		name: 'CV',
		component: CV
    },
    {
        path: '/credits',
        name: 'credits',
        component: Credits
    },
	{
		path: '*',
		name: 'default',
		redirect: '/'
	}
];

export default new Router({
	routes,
	mode: 'history'
});
