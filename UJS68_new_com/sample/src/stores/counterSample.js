import { defineStore } from 'pinia'

export const useStoreCounter = defineStore('counter', {
  state: () => ({
    count: 0,
    employeeList:[]
  }),
  actions: {
    increment() {
      this.count++;
    },
    addEmployee(emp){
      this.employeeList.push(emp)
    }
  }
})