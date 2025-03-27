<template>
  <div>
    X : <input type="text" v-model.number="x" />
    <br />
    <div>결과 : {{ result }}</div>
  </div>
</template>
<script>
import { ref, watch } from 'vue';

export default {
  name: 'Calc5',
  setup() {
    const x = ref(0); // x와 y 둘 중 하나가 변경되면 result값 갱신
    const result = ref(0);
    // watch(감시하려는 데이터, 처리함수)
    // watch는 변경 전후 데이터를 처리할 수 있다
    // 받아온 데이터들은 모두 .value 처리가 되어있는 데이터다
    watch(x, (current, old) => {
      console.log(`${old}->${current}`);
      result.value = current * 2;
    });

    return { x, result };
  },
};
</script>
