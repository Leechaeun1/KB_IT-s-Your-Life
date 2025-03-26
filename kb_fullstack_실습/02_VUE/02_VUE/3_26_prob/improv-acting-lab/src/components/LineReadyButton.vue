<template>
  <input
    class="readyButton"
    type="button"
    value="🤍 대사 준비 완료"
    @click="readyCountClick"

  ></input><br>
</template>
<script>
export default {
  name: 'LineReadyButton',
  data() {
    return { readyCount: 0 };
  },
  props: {
    value: {
      type: String,
    },
  },
  methods: {
    readyCountClick() {
      this.readyCount++;
      this.$emit('ready', { readyCount: this.readyCount });
      console.log(`대사 준비 완료! (총 ${this.readyCount}회 눌림)`)
    },
  },
};
</script>
