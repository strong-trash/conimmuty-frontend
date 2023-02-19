import { createRouter, createWebHashHistory } from 'vue-router';

import MainView from '@/views/MainView.vue';
import NewPostView from '@/views/NewPostView.vue';
import OldPostView from '@/views/OldPostView.vue';
import DetailView from '@/views/DetailView.vue';
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
	{
		path: '/newpost',
		name: 'NewPost',
		component: NewPostView,
	},
	{
		path: '/oldpost',
		name: 'OldPost',
		component: OldPostView,
	},
	{
		path: '/:id',
		name: 'Detail',
		component: DetailView,
		props: true,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
