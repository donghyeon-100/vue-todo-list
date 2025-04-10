<template>
  <!-- 전체 컨테이너를 감싸는 div -->
  <div class="container">
    <!-- 헤더 컴포넌트를 표시 -->
    <Header />

    <!-- 라우터에 의해 매칭되는 컴포넌트를 표시하는 영역 -->
    <!-- 클릭된 RouterLink에 따라 표시되는 컴포넌트가 변경됨 -->
    <RouterView />

    <!-- 로딩 중일 때만 Loading 컴포넌트를 표시 -->
    <Loading v-if="isLoading" />
  </div>
</template>

<script setup>
import { reactive, computed, provide } from 'vue';
import Header from '@/components/Header.vue';
import Loading from '@/components/Loading.vue';
import axios from 'axios';

/* store 가져오기 */
import { useTodoListStore } from '@/stores/todoList';

/* 스토어 생성 */
const todoListStore = useTodoListStore();

/* 반응성 유지를 위해서 계산된 속성을 다시 작성해야함 */
const { isLoading } = computed(() => todoListStore.isLoading);

const { fetchTodoList } = todoListStore;

/* 앱이 시작될 때 TodoList를 가져옴 */
fetchTodoList();
</script>
