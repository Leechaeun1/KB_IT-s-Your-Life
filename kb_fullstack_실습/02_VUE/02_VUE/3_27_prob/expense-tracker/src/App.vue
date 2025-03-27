<template>
  <div class="app">
    <div>
      <ExpenseForm @addBudget="addBudgetHandler" />
    </div>
    <h4>😭 지출 내역</h4>
    <div class="냥냥" v-for="(item, index) in budgetList" :key="index">
      {{ item.name }}: {{ item.price.toLocaleString('ko-KR') }}원<br />
    </div>
    <h4>👻 총 지출: {{ totalBugetPrice.toLocaleString('ko-KR') }}원</h4>
  </div>
</template>

<script>
import ExpenseForm from './components/ExpenseForm.vue';

export default {
  name: 'App',
  components: { ExpenseForm },
  data() {
    return {
      totalBugetPrice: 0,
      budgetList: [],
    };
  },
  methods: {
    addBudgetHandler(e) {
      this.budgetList.push(e);
      this.totalBugetPrice += e.price;
    },
  },
};
</script>
