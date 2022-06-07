<template>
  <div class="tasks mt-6 pb-12 space-y-4 overflow-y-scroll">
    <div
      class="relative box-border w-full min-h-28 py-5 px-6 rounded-3xl font-bold cursor-pointer"
      :class="{'bg-sky-200': task.priority === 0, 'bg-cyan-200': task.priority === 1, 'bg-amber-200': task.priority === 2}"
      v-for="task in props.tasks"
      @click="$router.push({ name: 'edit_task', params: { id: task.id } })"
    >
      <div class="w-12 p-1 border border-stone-900 text-center text-xs rounded-full">
        {{ ['一般', '重要', '紧急'][task.priority] }}
      </div>
      <div 
        class="task-status absolute right-6 top-5 w-5 h-5 border-2 rounded-full border-solid border-stone-900
             sm:hover:bg-stone-900"
        :class="{ 'bg-stone-900': task.completed, 'completed': task.completed }"
        @click.stop="() => toggleCompleted(task)"
      ></div>
      <div class="pt-3 text-lg">{{ task.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Task } from '../../types'
import { modifyTaskCompleted } from '../../database';

// Data
const props = defineProps<{
  tasks: Task[]
}>()

// Methods
function toggleCompleted(task: Task) {
  const completed = !task.completed
  modifyTaskCompleted(task.id, completed).then(() => {
    task.completed = completed
  })
}
</script>

<style scoped>
.tasks {
  height: calc(100% - 164px);
  -ms-overflow-style: none;  /* IE */
  scrollbar-width: none;  /* Firefox */
  overflow: -moz-scrollbars-none; /* older Firefox */
}
.tasks::-webkit-scrollbar { 
  display: none;  /* hide scrollbar for Safari and Chrome */
}
.completed::before {
  position: relative;
  left: 1px;
  bottom: 4px;
  content: '✓';
  color: white;
}
@media only screen and (min-width: 640px) {
  .task-status:hover::before {
    position: relative;
    left: 1px;
    bottom: 4px;
    content: '✓';
    color: white;
  }
}
</style>