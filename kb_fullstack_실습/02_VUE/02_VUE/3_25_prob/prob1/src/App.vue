<template>
  <div class="container">
    <h2>카페 주문 앱</h2>

    <h3>메뉴 선택</h3>
    <MenuList
      v-for="app in menuList"
      :key="app.name"
      :name="app.name"
      :price="app.price"
      @selectDrink="selectDrinkHandler"
    ></MenuList>
    <div class="col-sm-12">선택한 음료: {{ drinksName }}</div>
  </div>
</template>
<script>
import MenuList from './components/MenuList.vue';

export default {
  name: 'App',
  components: { MenuList },
  data() {
    return {
      drinksName: '',
      menuList: [
        { name: '아메리카노', price: 4000 },
        { name: '카페라떼', price: 4500 },
        { name: '바닐라라떼', price: 4800 },
        { name: '콜드브루', price: 5000 },
      ],
    };
  },
  methods: {
    selectDrinkHandler(e) {
      this.drinksName = e.name;
    },
  },
};
</script>
