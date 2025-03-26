<template>
  <!-- :value => 받아오고 emit =>날려주고 -->
  <input
    type="text"
    :value="name"
    @input="$emit('update:name', $event.target.value)"
  />
</template>
<script>
export default {
  name: 'InputName',
  props: ['name'],
};
</script>
