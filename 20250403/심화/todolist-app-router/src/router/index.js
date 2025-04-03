import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../pages/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/About.vue'),
    },

    {
      path: '/todos',
      name: 'todos',
      component: () => import('../pages/TodoList.vue'),
    },

    {
      path: '/todos/add',
      name: 'addTodo',
      component: () => import('../pages/AddTodo.vue'),
    },

    {
      path: '/todos/:id',
      name: 'editTodo',
      component: () => import('../pages/EditTodo.vue'),
    },

    {
      path: '/todos/edit/:id',
      name: 'editTodo',
      component: () => import('../pages/EditTodo.vue'),
    },

    {
      path: '/:paths(.*)*',
      name: 'notFound',
      component: () => import('../pages/NotFound.vue'),
    },
  ],
});

export default router;
