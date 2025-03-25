<!-- <template>
  <div class="container">
    <h2>🩷🩷🩷</h2>
    <h3>메뉴 선택</h3>
    <MenuList
      v-for="app in menuList"
      :key="app.name"
      :name="app.name"
      :price="app.price"
      @selectDrink="selectDrinkHandler"
    ></MenuList>
    <div class="drinks">선택한 음료: {{ drinksName }}</div>
    <br />
    <DrinkOptions
      :selectDrink="drinksName"
      :sizeList="sizeList"
      @selectOption="selectOptionHandler"
    ></DrinkOptions>
    <br />
    <div class="currentChoiced">
      <h5>현재 선택 옵션:</h5>

      <div :selectedDrinkSize="selectSize">사이즈:{{ selectSize }}</div>
      <div>추가샷:</div>
      <div>얼음 양:</div>
    </div>
  </div>
</template>
<script>
import MenuList from './components/MenuList.vue';
import DrinkOptions from './components/DrinkOptions.vue';

export default {
  name: 'App',
  components: { MenuList, DrinkOptions },
  data() {
    return {
      drinksName: '',
      selectSize: '',
      menuList: [
        { name: '아메리카노', price: 4000 },
        { name: '카페라떼', price: 4500 },
        { name: '바닐라라떼', price: 4800 },
        { name: '콜드브루', price: 5000 },
      ],
      sizeList: [
        { id: 1, size: 'Small', checked: false },
        { id: 2, size: 'Medium', checked: true },
        { id: 3, size: 'Large', checked: false },
      ],
    };
  },
  methods: {
    selectDrinkHandler(e) {
      this.drinksName = e.name;
    },
    selectOptionHandler(e) {
      this.selectDrink = e.name;
    },
  },
};
</script> -->
<template>
  <div class="container">
    <h2>🩷🩷🩷</h2>
    <h3>메뉴 선택</h3>
    <MenuList
      v-for="app in menuList"
      :key="app.name"
      :name="app.name"
      :price="app.price"
      @selectDrink="selectDrinkHandler"
    ></MenuList>
    <div class="drinks">선택한 음료: {{ drinksName }}</div>
    <br />
    <DrinkOptions
      :selectDrink="drinksName"
      :sizeList="sizeList"
      @selectOption="selectOptionHandler"
    ></DrinkOptions>
    <br />
    <div class="currentChoiced">
      <h5>현재 선택 옵션:</h5>
      <div>사이즈: {{ selectSize }}</div>
      <div>추가샷: {{ extraShot ? '추가' : '없음' }}</div>
      <div>얼음 양: {{ iceAmount }}</div>
    </div>
  </div>
</template>

<script>
import MenuList from './components/MenuList.vue';
import DrinkOptions from './components/DrinkOptions.vue';

export default {
  name: 'App',
  components: { MenuList, DrinkOptions },
  data() {
    return {
      drinksName: '',
      selectSize: 'Medium', // 기본값 설정
      extraShot: false,
      iceAmount: '보통',
      menuList: [
        { name: '아메리카노', price: 4000 },
        { name: '카페라떼', price: 4500 },
        { name: '바닐라라떼', price: 4800 },
        { name: '콜드브루', price: 5000 },
      ],
      sizeList: ['Small', 'Medium', 'Large'],
    };
  },
  methods: {
    selectDrinkHandler(e) {
      this.drinksName = e.name;
    },
    selectOptionHandler(e) {
      if (e.type === 'size') {
        this.selectSize = e.value;
      } else if (e.type === 'shot') {
        this.extraShot = e.value;
      } else if (e.type === 'ice') {
        this.iceAmount = e.value;
      }
    },
  },
};
</script>
