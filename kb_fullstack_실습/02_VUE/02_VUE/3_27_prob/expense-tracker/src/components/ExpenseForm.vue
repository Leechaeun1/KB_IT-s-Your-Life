<template>
  <h2>🥝 Simple Budget Diary</h2>
  <input type="text" placeholder="항목명 입력" v-model="name" />
  <input type="number" v-model="price" /><input
    type="button"
    @click="$emit('addBudget', { name, price })"
    value="추가"
    class="addButton"
  /><br />
</template>
<script>
export default {
  name: 'ExpenseForm',
  data() {
    return {
      name: '',
      price: 0,
    };
  },
};
</script>
