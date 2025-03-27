<template>
  <h2>🥝 Simple Budget Diary</h2>
  <input type="text" placeholder="항목명 입력" v-model="name" />
  <input type="number" v-model="price" /><input
    type="button"
    @click="addBudget"
    value="추가"
    class="addButton"
  /><br />
</template>
<script>
import { ref } from 'vue';

export default {
  name: 'ExpenseForm',
  setup(props, context) {
    const name = ref('');
    const price = ref(0);
    const addBudget = () => {
      context.emit('addBudget', { name: name.value, price: price.value });
      name.value = '';
      price.value = 0;
    };

    return { name, price, addBudget };
  },
};
</script>
