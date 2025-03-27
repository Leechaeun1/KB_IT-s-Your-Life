<template>
  <div class="app">
    <div>
      <ExpenseForm @addBudget="addBudgetHandler" />
    </div>
    <h4>😭 지출 내역</h4>
    <ExpenseList
      :budgetList="budgetList"
      @delete-budgetList="deleteBudgetList"
    />
    <TotalDisplay :totalBudgetPrice="totalBudgetPrice" />
  </div>
</template>

<script>
import { ref } from 'vue';
import ExpenseForm from './components/ExpenseForm.vue';
import TotalDisplay from './components/TotalDisplay.vue';
import ExpenseList from './components/ExpenseList.vue';

export default {
  name: 'App',
  components: { ExpenseForm, TotalDisplay, ExpenseList },
  setup() {
    const totalBudgetPrice = ref(0);
    const budgetList = ref([]);

    const addBudgetHandler = (e) => {
      budgetList.value.push(e);
      totalBudgetPrice.value += e.price;
    };

    const deleteBudgetList = (index) => {
      const deletedPrice = budgetList.value[index].price;
      budgetList.value.splice(index, 1);
      totalBudgetPrice.value -= deletedPrice;
    };

    return { totalBudgetPrice, budgetList, addBudgetHandler, deleteBudgetList };
  },
};
</script>
