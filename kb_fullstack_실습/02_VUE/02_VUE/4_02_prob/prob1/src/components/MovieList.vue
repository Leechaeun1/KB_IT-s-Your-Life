<template>
  <ul>
    <li v-for="movie in movieList" :key="movie.id">
      <span>🎬{{ movie.title }} - {{ movie.director }}</span>
    </li>
  </ul>
</template>
<script>
import { inject } from 'vue';

export default {
  name: 'MovieList',
  setup() {
    const movieList = inject('movieList');
    return { movieList };
  },
};
</script>
<style scoped>
li {
  background-color: rgb(253, 230, 230);
  padding: 1.25rem;
  margin: 5px;
  border-radius: 0.75rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}
ul {
  list-style-type: none;
}
</style>
