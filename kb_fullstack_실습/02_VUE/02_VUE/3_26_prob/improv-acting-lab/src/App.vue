<template>
  <div class="container">
    <h2>improv-acting-lab 🖤</h2>
    <br />
    <div>
      <LineReadyButton @ready="readyHandler" />버튼 누른 횟수:
      {{ readyCount }}회
    </div>
    <br />
    <div v-if="readyCount" class="ment">
      오늘도 넌 멋질 거야! 👸 자신 있게 무대에 올라가!
    </div>
  </div>
</template>
<script>
import LineReadyButton from './components/LineReadyButton.vue';

export default {
  name: 'App',
  components: { LineReadyButton },
  data() {
    return { readyCount: 0 };
  },
  methods: {
    readyHandler(e) {
      this.readyCount = e.readyCount;
    },
  },
};
</script>
