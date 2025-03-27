<template>
  <div class="냥냥" v-for="(item, index) in budgetList" :key="index">
    <div><span v-if="item.name === '냥'">😺</span>
    <span v-if="item.name === '멍'">🐶</span>
    <span v-if="item.name === '낑'">🐵</span>
    <span v-if="item.name === '엉'">🦁</span>
    {{ item.name }}: {{ item.price.toLocaleString('ko-KR') }}원</div>
    <input type="button" @click.stop="deleteItem(index)" class="x" value="❌"></input>
  </div>
</template>
<script setup>
defineProps({
  budgetList: { type: Array, required: true },
});
const emit = defineEmits(['delete-budgetList']);

const deleteItem = (index) => {
    emit('delete-budgetList',index);
}
</script>
