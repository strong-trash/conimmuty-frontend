import { createRouter, createWebHashHistory } from 'vue-router';

import MainView from '@/views/MainView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const routes = [
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFoundView,
	},
	{
		path: '/',
		name: 'Main',
		component: MainView,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
