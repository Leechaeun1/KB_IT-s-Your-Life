<template>
  <div>
    <h2>콘솔을 확인합니다.</h2>
  </div>
</template>
<script setup>
import axios from 'axios';
const listUrl = '/api/todos';
const todoUrlPrefix = '/api/todos/';
//4건의 목록을 조회한 후 첫번째, 두번째 할일을 순차적으로 조회합니다.
const requestAPI = async () => {
  let todoList;
  // 보통 axios 처리 시 서버에서 받아오기 위해 await를 붙인다
  let response = await axios.get(listUrl);
  todoList = response.data;
  console.log('# TodoList : ', todoList);
  // 리스트의 개별 요소들을 돌면서 하나씩 출력
  for (let i = 0; i < todoList.length; i++) {
    response = await axios.get(todoUrlPrefix + todoList[i].id);
    console.log(`# ${i + 1}번째 Todo : `, response.data);
  }
};
requestAPI();
</script>
