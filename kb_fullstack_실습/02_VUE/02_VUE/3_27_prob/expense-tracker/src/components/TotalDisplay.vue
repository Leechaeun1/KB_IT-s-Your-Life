<template>
  <h4>👻 총 지출: {{ totalBudgetPrice.toLocaleString('ko-KR') }}원</h4>
</template>
<script setup>
defineProps({
  totalBudgetPrice: { type: Number, required: true },
});
</script>
