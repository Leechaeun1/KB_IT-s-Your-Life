<template>
  <div>
    <Child3 />
    <Child1 />
    <Child2 />
  </div>
</template>
<script>
// 가장 마지맘ㄱ에 import한 색상으로 스타일이 적용된다
import Child3 from './components/Child3.vue';
import Child2 from './components/Child2.vue';
import Child1 from './components/Child1.vue';

export default {
  name: 'App',
  components: { Child1, Child2, Child3 },
};
</script>
