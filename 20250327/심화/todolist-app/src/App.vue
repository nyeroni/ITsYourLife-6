<template lang="">
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div class="title">🕒 TodoList App 💻</div>
    </div>
    <div class="card card-default card-borderless">
      <div class="card-body">
        <InputTodo @add-todo="addTodo" />
        <!--카운트 컴포넌트-->
        <TodoCount
          :todolist="state.todoList"
          :completed-count="completedCount"
          :not-completed-count="notCompletedCount"
        />
        <!--목록 컴포넌트
          - 목록 화면 렌더링에 필요한 데이터 todoList를 부모 (App.vue)가 가지고 있음
          - 부모 -> 자식 데이터 전달 : props 이용
            -> v-bind : 전달할 이름="데이터"
        -->
        <TodoList
          v-bind:todolist="sortedList"
          @toggle-completed="toggleCompleted"
          @delete-todo="deleteTodo"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, onMounted , computed} from 'vue';
import InputTodo from './components/InputTodo.vue';
import TodoList from './components/TodoList.vue';
import TodoCount from './components/TodoCount.vue';

const ts = new Date().getTime();
const state = reactive({ todoList: [] });

onMounted(() => {
  state.todoList.push({ id: ts, todo: '자전거 타기', completed: false });
  state.todoList.push({ id: ts + 1, todo: '딸과 공원 산책', completed: true });
  state.todoList.push({
    id: ts + 2,
    todo: '일요일 애견 카페',
    completed: false,
  });
  state.todoList.push({ id: ts + 3, todo: 'Vue 원고 집필', completed: false });
});

const addTodo = (reveiveTodo) => {
  state.todoList.push({
    todo: reveiveTodo,
    completed: false,
  });
};
/* 할 일 완료 여부 변경 메서드 */
//매개변수 id : TodoListItem에서부터 전달된 ID
const toggleCompleted = (id) => {
  let index = state.todoList.findIndex((item) => id === item.id);
  state.todoList[index].completed = !state.todoList[index].completed;
};
/* 할 일 삭제 메서드 */
const deleteTodo = (id) => {
  // 배열.findIndex(콜백함수) : 콜백 함수의 결과가 true인 index를 반환

  let index = state.todoList.findIndex((item) => id === item.id);
  state.todoList.splice(index, 1);
};
// -> 계산돼서 return된 값은
  // 완료 개수 카운트
  // 완료된 todo 개수 계산
  const completedCount = computed(() => {
  return state.todoList.filter((todo) => todo.completed).length;
});

  // 미완료된 todo 개수 계산
  const notCompletedCount = computed(() => {
  return state.todoList.length - completedCount.value;
});

  // 정렬
const sortedList=computed(() => {
      state.todoList.sort((t1, t2) => {
          // true > false  -> 결과 : true
          if (t1.completed > t2.completed) {
          return 1; // 양수 반환 시 자리 바뀜 (t1, t2 -> t2, t1)
          }

          if (t1.completed < t2.completed) {
          return -1; // 음수 반환 시 자리 바꿈 X
          }

          // 위 if문 실행 X === completed가 같을 경우
          // -> 문자열 오름 차순 정렬

          // 모두 소문자로 변경(대소문자 구분 X)
          const todo1 = t1.todo.toLowerCase();
          const todo2 = t2.todo.toLowerCase();

          if (todo1 > todo2) return 1; // 자리 교체
          else if (todo1 === todo2) return 0; // 유지
          else return -1; // 유지
      });

      // 정렬된 todoList 반환
      return state.todoList;
  });
</script>
