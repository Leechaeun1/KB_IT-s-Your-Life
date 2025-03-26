<template>
  <div class="random">
    <div v-if="line && source">
      <div>
        <h3>"{{ line }}"</h3>
        <br />출처: {{ source }} <br />
      </div>
    </div>
    <div v-else><h3>😴 아직 대사가 없습니다. 버튼을 눌러주세요!</h3></div>
    <br />
    <input
      type="button"
      value="🎲 랜덤 대사 뽑기"
      class="randomButton"
      @click="randomDraw"
    />

    <div>✨ 오늘의 즉흥 대사입니다!</div>
    <br /><img :src="imagePath" class="line-image" />
    <div class="tip">🧚🏻‍♀️TIP : 표정 풍부하게, 발음 또박또박!</div>
    <br />
    <div v-if="line.length >= 30">🔪 대사가 길어요! 천천히 연기해 보세요.</div>
  </div>
</template>
<script>
export default {
  name: 'LineCard',
  inject: ['lines'],
  props: {
    line: String,
    source: String,
    image: String,
  },
  data() {
    return {
      imagePath: '',
    };
  },
  methods: {
    randomDraw() {
      if (this.lines.length) {
        const randomIndex = Math.floor(Math.random() * this.lines.length);
        const randomLine = this.lines[randomIndex];

        // image 경로를 import 방식으로 처리
        this.imagePath = new URL(
          `../assets/${randomLine.image}`,
          import.meta.url
        ).href;

        this.$emit('update:selectedLine', {
          line: randomLine.line,
          source: randomLine.source,
          image: randomLine.image,
        });
      }
    },
  },
};
</script>
<style scoped>
.line-image {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
}
</style>
