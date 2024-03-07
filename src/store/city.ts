import { defineStore } from 'pinia'
import { ref, Ref } from 'vue'
import { getCitysData } from '../api'

type GroupedData = {
  [key: string]: string[];
};

export const useCityStore = defineStore('city', () => {
  const selectedCity = ref(null)
  const selectedTown = ref<string>('')

  const citys: Ref<GroupedData | {}> = ref({})

  const getCitysByApp = async () => {
    try {
      const response = await getCitysData()
      citys.value = groutBy(response.records)
    } catch (e) {
      console.log(e)
    }
  }

  const groutBy = (arr: kintone.types.cityItem[]): GroupedData => {
    const result: GroupedData = {}
    for (const item of arr) {
      const { city, town } = item
      const key = city.value
      if (result[key]) {
        result[key].push(town.value)
      } else {
        result[key] = [town.value]
      }
    }
    return result;
  }

  const resetTownValue = () => {
    selectedTown.value = ''
    const record = kintone.app.record.get()
    record['record']['result']['value'] = ''
    kintone.app.record.set(record)
  }

  const setRecordValue = (event: string) => {
    const record = kintone.app.record.get();    
    record['record']['result']['value'] = event
    kintone.app.record.set(record);
  }

  return { selectedCity, selectedTown, citys, getCitysByApp, resetTownValue, setRecordValue }
})