<template>
  <!-- 부모에서 객체를 통째로 넘겨줬기 때문에 객체 접근 필요 -->
  <li>
    <input type="checkbox" :checked="idol.checked" />{{ id }} - {{ idol.name }}
  </li>
</template>
<script>
export default {
  name: 'CheckboxItem3',
  props: {
    id: [Number, String], // id 값은 Number나 String 타입
    name: String, // name 값은 String 타입
    checked: {
      // checked 값은 Boolen 값이 아니며, 기본 값은 false
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
