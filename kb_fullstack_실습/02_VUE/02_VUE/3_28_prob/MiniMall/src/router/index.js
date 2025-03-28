import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Products from '@/pages/Products.vue';
import Cart from '@/pages/Cart.vue';
import ProductDetail from '@/pages/ProductDetail.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/products',
      name: 'products',
      component: Products,
    },
    {
      path: '/products/:id',
      name: 'productdetail',
      component: ProductDetail,
    },

    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
  ],
});

export default router;
