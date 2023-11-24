import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useEmployeeStore = defineStore('employeeManager', () => {
  const employee = ref({})
  const employeeList = ref([])

  const addEmployee = (emp) => {
    employeeList.value.push(emp)
  }

  return { employee, employeeList, addEmployee }
})
