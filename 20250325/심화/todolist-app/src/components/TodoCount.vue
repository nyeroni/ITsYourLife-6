<template>
  <div class="row mb-3">
    <div class="col-md text-center">
      전체 todo 개수 : <span>{{ todolist.length }}</span>
    </div>
    <div class="col-md text-center">
      완료 todo 개수 :
      <span :class="{ completed: completedCount > 0 }">{{
        completedCount
      }}</span>
    </div>
    <div class="col-md text-center">
      미완료 todo 개수 :
      <span :class="{ notCompleted: notCompletedCount > 0 }">{{
        notCompletedCount
      }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TodoCount',

  props: {
    //전달 받은 todolist는 배열 형태, 필수 데이터
    todolist: { type: Array, required: true },
    completedCount: { type: Number, required: true },
    notCompletedCount: { type: Number, required: true },
  },
};
</script>
