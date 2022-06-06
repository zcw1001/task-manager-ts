<template>
  <MainLayout>
    <Header />
    <Options 
      :options="['全部', '未完成', '已完成']" 
      :default="taskFilter" 
      :clicked="filterChanged"
    />
    <Tasks 
      :tasks="curTasks" 
    />
    <AddButton />
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../Layouts/MainLayout.vue'
import Header from './Header.vue'
import Options from '../common/Options.vue'
import AddButton from './AddButton.vue'
import Tasks from './Tasks.vue'
import { onBeforeMount, reactive, watch } from 'vue'
import { initDatabase, insertTasks, getTasks, getDefaultTaskFilter } from '../../database'
import { Task } from '../../types'

// Data
onBeforeMount(async () => {
  const firstCreated = await initDatabase()
  if (firstCreated) {
    await insertTasks([
      { name: '任务分为一般、重要、紧急三种类型', priority: 0, completed: true }, 
      { name: '点击任务卡片右上角可以切换任务的完成状态', priority: 1, completed: false }, 
      { name: '点击任务卡片可以进入任务编辑页面', priority: 1, completed: false }, 
      { name: '点击任务列表上方的按钮可以过滤任务列表', priority: 1, completed: false }, 
      { name: '点击下方按钮可以添加新任务', priority: 2, completed: false },
      { name: '点击页面右上角齿轮可以打开设置页面', priority: 2, completed: false }
    ])
  }
})
let taskFilter: number = parseInt(getDefaultTaskFilter())
let tasks: Task[] = []
let curTasks: Task[] = reactive([])
getTasks().then(res => {
  tasks = res.slice()
  curTasks.splice(0, curTasks.length, ...tasks)
  filterChanged(taskFilter)
})

// Methods
function filterChanged(newFilter: number) {
  taskFilter = newFilter
  const newTasks = tasks.filter(e => {
    if (newFilter === 0) {
      return true
    } else if (newFilter === 1) {
      return e.completed === false
    } else {
      return e.completed === true
    }
  })
  curTasks.splice(0, curTasks.length, ...newTasks)
}
watch(curTasks, () => {
  filterChanged(taskFilter)
})
</script>

<style scoped>
</style>
