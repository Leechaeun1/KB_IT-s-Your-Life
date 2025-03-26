<template>
  <div class="container">
    <h2>🖤🖤🖤</h2>
    <br />
    <div>
      <LineReadyButton @ready="readyHandler" />버튼 누른 횟수:
      {{ readyCount }}회
    </div>
    <br />
    <div class="ment">준비되면 눌러주세요! 자신감을 가져요!</div>
    <LineCard
      v-if="readyCount"
      :line="selectedLine.line"
      :source="selectedLine.source"
      :image="selectedLine.image"
      @update:selectedLine="updateSelectedLine"
    />
  </div>
</template>
<script>
import LineReadyButton from './components/LineReadyButton.vue';
import LineCard from './components/LineCard.vue';
export default {
  name: 'App',
  components: { LineReadyButton, LineCard },
  data() {
    return {
      readyCount: 0,
      selectedLine: { line: '', source: '', image: '' },
      imagePath: '@/assets/',
      lines: [
        {
          line: '조금은 친절해도 되잖아. 다들 니들처럼 익숙한 게 아니니까.',
          source: '청춘시대',
          image: '청춘시대.png',
        },
        {
          line: '너와 함께한 시간 모두 눈부셨다. 날이 좋아서 날이 좋지 않아서 날이 적당해서 모든 날이 좋았다.',
          source: '도깨비',
          image: '도깨비.png',
        },
        {
          line: '당신이 좋은 이유? 그저 그 사람이라서. 바로 너라서.',
          source: '응답하라 1997',
          image: '응칠.png',
        },
        {
          line: '인생에서 시련 오는 거, 진짜와 가짜를 한 번씩 걸러내라고 하나님이 주신 기회가 아닌가 싶다.',
          source: '별에서 온 그대',
          image: '별그대.png',
        },
        {
          line: '잊지 말자. 나는 어머니의 자부심이다. 모자라고 부족한 자식이 아니다.',
          source: '미생',
          image: '미생.png',
        },
      ],
    };
  },
  provide() {
    return {
      lines: this.lines,
    };
  },
  methods: {
    readyHandler(e) {
      this.readyCount = e.readyCount;
    },
    updateSelectedLine(newLine) {
      this.selectedLine = newLine; // 부모에서 selectedLine을 업데이트
    },
  },
};
</script>
