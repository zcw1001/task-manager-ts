<template>
  <DetailLayout title="设置">
    <OptionField 
      label="数据存储" 
      :options="['本地']" 
      :default="0"
    />
    <OptionField 
      label="默认任务列表" 
      :options="['全部', '未完成', '已完成']" 
      :default="taskFilter"
      :clicked="filterChanged"
    />
    <div class="actions absolute bottom-4">
      <Button 
        name="保存" 
        type="normal" 
        :clicked="saveSettings"
      />
    </div>
  </DetailLayout>
</template>

<script setup lang="ts">
import DetailLayout from '../Layouts/DetailLayout.vue'
import OptionField from './OptionField.vue'
import Button from './Button.vue'
import { getDefaultTaskFilter, setDefaultTaskFilter } from '../../database'
import { useRouter } from 'vue-router'

// Data
let taskFilter: number = parseInt(getDefaultTaskFilter())
const router = useRouter()

// Methods
function saveSettings() {
  setDefaultTaskFilter(taskFilter)
  router.push({ name: 'home' })
}
function filterChanged(newFilter: number) {
  taskFilter = newFilter
}
</script>

<style scoped>
.actions {
  width: calc(100% - 80px);
}
</style>