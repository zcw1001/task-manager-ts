<template>
  <DetailLayout title="编辑任务">
    <TextField 
      label="任务名称" 
      v-model:text="taskName"
    />
    <OptionField 
      label="任务类型" 
      :options="['一般', '重要', '紧急']" 
      :default="taskType"
      :clicked="taskTypeChanged"
    />
    <div class="actions absolute bottom-4 space-y-2">
      <Button name="确定" type="normal" :clicked="editTask" />
      <Button name="删除" type="important" :clicked="() => deleteTask(taskID)" />
    </div>
  </DetailLayout>
</template>

<script setup lang="ts">
import DetailLayout from '../Layouts/DetailLayout.vue'
import TextField from './TextField.vue'
import OptionField from './OptionField.vue'
import Button from './Button.vue'
import { modifyTask, getTask, removeTask } from '../../database'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

// Data
let taskName = ref('')
let taskType = 1
const route = useRoute()
const router = useRouter()
let taskID = 0
if (typeof route.params.id === 'string') {
  taskID = parseInt(route.params.id)
}
const tasks = await getTask(taskID)
const task = tasks[0]
taskName.value = task.name
taskType = task.priority

// Method
function taskTypeChanged(newType: number) {
  taskType = newType
}
function editTask() {
  modifyTask(taskID, taskName.value, taskType).then(() => {
    router.push({ name: 'home' })
  })
}
function deleteTask(id: number) {
  removeTask(id).then(() => {
    router.push({ name: 'home' })
  })
}
</script>

<style scoped>
.actions {
  width: calc(100% - 80px);
}
</style>