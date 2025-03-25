<template>
  <div id="app">
    <div class="row">
      <div class="col-md-3"></div>
      <button
        type="button"
        @click="$emit('selectDrink', { name })"
        class="btn btn-dark"
      >
        {{ name }} ({{ price }}원)
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MenuList',
  props: ['name', 'price'],
};
</script>
