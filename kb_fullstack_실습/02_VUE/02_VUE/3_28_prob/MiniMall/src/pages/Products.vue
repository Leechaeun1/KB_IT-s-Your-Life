<template>
  <div>
    <h2>상품 목록</h2>
    <div class="container">
      <div class="row">
        <div
          v-for="p in products"
          :key="p.id"
          class="col-6 col-xs-6 col-sm-4 col-md-3 col-lg-2"
        >
          <img
            class="img-thumbnail"
            style="width: 90px; height: 110px"
            :src="p.image"
          /><br />
          <h6 class="display-7">{{ p.name }}</h6>

          <h6>{{ p.price }}원</h6>
          <router-link :to="'/products/' + p.id">
            <h6>상세 보기</h6></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import products from '@/data/products.json';

export default {
  name: 'Products',
  setup() {
    return { products };
  },
};
</script>
