<template>
  <div class="container"><h2>🎥 지브리 영화 리스트</h2></div>
  <MovieList />
</template>

<script>
import { provide, ref } from 'vue';
import MovieList from './components/MovieList.vue';
import axios from 'axios';

export default {
  components: { MovieList },
  setup() {
    const movieList = ref([]);

    axios.get('http://localhost:3000/movies').then((response) => {
      console.log('#응답객체 : ', response);
      movieList.value = response.data;
    });

    provide('movieList', movieList);

    return {};
  },
};
</script>
