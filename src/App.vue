<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { NSelect, NSpace } from 'naive-ui'
import { storeToRefs } from 'pinia'
import { useCityStore } from './store/city'

const { getCitysByApp, resetTownValue, setRecordValue } = useCityStore() 
const { selectedCity, selectedTown, citys } = storeToRefs(useCityStore())

onBeforeMount(() => {
  getCitysByApp()
})
</script>

<template>
  <div>
    <h3>城市</h3>
    <n-space vertical>
      <n-select 
        v-model:value="selectedCity" 
        :options="Object.keys(citys).map(key => ({
          label: key,
          value: key
        }))" 
        placeholder="請選擇城市" 
        :on-update-value="resetTownValue"
      />
    </n-space>
    <div class="container"></div>
    <h3>鄉鎮</h3>
    <p v-if="!selectedCity">請先選擇城市</p>
    <n-space vertical v-else>
      <n-select 
        v-model:value="selectedTown" 
        :options="(citys[selectedCity] as []).map((key: string) => ({
          label: key,
          value: key
        }))" 
        :on-update-value="setRecordValue"
      />
    </n-space>
  </div>
</template>

<style scoped>
/* .container {
  height: 20px;
} */
</style>

<script type="module" src="