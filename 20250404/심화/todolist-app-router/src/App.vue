<template>
  <div class="container">
    <Header />

    <RouterView />

    <Loading v-if="isLoading" />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Loading from '@/components/Loading.vue';
import { computed } from 'vue';

// store 정의 함수 가져오기
import { useTodoListStore } from '@/stores/todoList.js';

// store 객체 생성
const todoListStore = useTodoListStore();
const { fetchTodoList } = todoListStore;
const isLoading = computed(() => todoListStore.isLoading);
fetchTodoList();
</script>
