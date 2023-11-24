<script setup>
import { ref, reactive } from 'vue'
import PiniaChildComponent from '/src/components/chap7/pinia/PiniaChildComponent.vue'
import { useStoreCounter } from '@/stores/counter.js'


const employeeName = ref('') 
const section = ref('')
const employeeList = reactive([])
const {counter} = useStoreCounter()

const addEmployee = () =>{
  employeeList.push({
    employeeName :employeeName.value,
    section : section.value
  })
}

</script>

<template>
  <div>
    <h2>親コンポーネント</h2>
    <p>従業員名：<input type="text" v-model.lazy="employeeName"></p>
    <p>所属：<input type="text" v-model.lazy="section"></p>
    <button v-on:click="counter.increment()">追加</button>
    <p>counter:{{ counter.count }}</p>

    <ul>
      <li v-for="(emp,index) in employeeList" v-bind:key="emp.employeeName">
      {{ emp.employeeName }} : {{ emp.section }}
    </li>
    </ul>
    <PiniaChildComponent/>
  </div>
	
</template>

<style scoped>
div{
  border : solid 1px #333 ;
  padding: 10px;
  margin-top: 10px;

}
</style>
