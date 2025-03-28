<template>
  <div className="mt-5">
    <h4 class="mt-2">{{ product.name }}</h4>
    <img :src="product.image" class="img" />
    <p>{{ product.price }}원</p>
    <br />
    <br />
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import products from '@/data/products.json';

export default {
  name: 'ProductDetail',
  setup() {
    const currentRoute = useRoute();
    const id = parseInt(currentRoute.params.id, 10);
    const product = products.find((p) => p.id === id);

    return { product };
  },
};
</script>
