<template>
  <DetailLayout title="添加任务">
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
    <div class="actions absolute bottom-4">
      <Button 
        name="添加" 
        type="normal" 
        :clicked="addTask"
      />
    </div>
  </DetailLayout>
</template>

<script setup lang="ts">
import DetailLayout from '../Layouts/DetailLayout.vue'
import TextField from './TextField.vue'
import OptionField from './OptionField.vue'
import Button from './Button.vue'
import { insertTask } from '../../database'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Data
let taskName = ref('')
let taskType = 1
const router = useRouter()

// Method
function taskTypeChanged(newType: number) {
  taskType = newType
}
function addTask() {
  insertTask({
    name: taskName.value,
    priority: taskType,
    completed: false
  }).then(() => {
    router.push({ name: 'home' })
  })
}
</script>

<style scoped>
.actions {
  width: calc(100% - 80px);
}
</style>