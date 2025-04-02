<script setup></script>

<template>
  <div><h2>콘솔을 확인합니다.</h2></div>
</template>
<script setup>
import axios from 'axios';

const requestAPI = () => {
  // const url = 'http://localhost:3000/todos/1';
  // 해당 url로 get 메소드를 보낸 후 응답 데이터 출력
  const url = '/api/todos/1';
  axios.get(url).then((response) => {
    console.log('#응답객체:', response);
  });
};
</script>
