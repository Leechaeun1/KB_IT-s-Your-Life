<template>
  <button
    type="button"
    @click="$emit('selectDrink', { name })"
    class="btn btn-dark"
  >
    {{ name }} ({{ price }}원)
  </button>
</template>
<script>
export default {
  name: 'MenuList',
  props: ['name', 'price'],
};
</script>
