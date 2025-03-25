<template>
  <div>
    <h2>관심있는 K-POP 가수?</h2>
    <hr />
    <ul>
      <!-- :name과 :checked는 자식에게 전달할 props -->
      <!-- 컴포넌트로 등록한 사용자 정의 태그 -->
      <CheckboxItem
        v-for="idol in idols"
        :key="idol.id"
        :name="idol.name"
        :checked="idol.checked"
        :id="idol.id"
      />
    </ul>
  </div>
</template>
<script>
import CheckboxItem from './components/CheckBoxItem3.vue';

export default {
  name: 'App',
  // 지역 컴포넌트 등록 방법, 해당 vue에서만 사용 가능
  components: { CheckboxItem },
  data() {
    return {
      idols: [
        { id: 1, name: 'BTS', checked: true },
        { id: 2, name: 'Black Pink', checked: false },
        { id: 3, name: 'EXO', checked: false },
        { id: 4, name: 'ITZY', checked: false },
      ],
    };
  },
};
</script>
