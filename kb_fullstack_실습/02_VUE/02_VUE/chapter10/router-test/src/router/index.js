import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import ElectronicsPage from '@/pages/ElectronicsPage.vue';
import JeweleryPage from '@/pages/JeweleryPage.vue';
import MensClothingPage from '@/pages/MensClothingPage.vue';
import WomensClothingPage from '@/pages/WomensClothingPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/',
      name: 'electronics',
      component: ElectronicsPage,
    },
    {
      path: '/',
      name: 'jewelery',
      component: JeweleryPage,
    },
    {
      path: '/',
      name: 'mensclothing',
      component: MensClothingPage,
    },
    {
      path: '/',
      name: 'womensclothing',
      component: WomensClothingPage,
    },
  ],
});

export default router;
