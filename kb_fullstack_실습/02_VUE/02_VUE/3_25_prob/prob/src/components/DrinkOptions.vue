<template>
  <div class="choiceOption">
    <div>
      <h4>{{ selectDrink }} 옵션 선택</h4>
    </div>

    <div>
      사이즈: <br />
      <label v-for="size in sizeList" :key="size">
        <input
          type="radio"
          :value="size"
          v-model="selectedSize"
          @change="updateSize"
        />
        {{ size }}&nbsp;
      </label>
    </div>
    <br />
    <div>
      <input type="checkbox" v-model="extraShot" @change="updateShot" /> 샷 추가
    </div>
    <br />
    <div>
      얼음 양:
      <select v-model="selectedIce" @change="updateIce">
        <option value="적게">적게</option>
        <option value="보통">보통</option>
        <option value="많이">많이</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DrinkOptions',
  props: {
    selectDrink: String,
    sizeList: Array,
  },
  data() {
    return {
      selectedSize: 'Medium',
      extraShot: false,
      selectedIce: '보통',
    };
  },
  methods: {
    updateSize() {
      this.$emit('selectOption', { type: 'size', value: this.selectedSize });
    },
    updateShot() {
      this.$emit('selectOption', { type: 'shot', value: this.extraShot });
    },
    updateIce() {
      this.$emit('selectOption', { type: 'ice', value: this.selectedIce });
    },
  },
};
</script>
