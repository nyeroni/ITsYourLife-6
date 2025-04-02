<template>
  <div>
    <h2>콘솔을 확인합니다.</h2>
  </div>
</template>

<script setup>
import axios from 'axios';

const requestAPI = () => {
  axios
    .get('/api/todos')
    .then((response) => {
      console.log('# 전체 Todo 목록:', response.data);

      return axios.get('/api/todos/1');
    })
    .then((response) => {
      console.log('# ID 1 Todo:', response.data);
    })
    .catch((error) => {
      console.error('에러 발생:', error);
    });
};

requestAPI();
</script>
