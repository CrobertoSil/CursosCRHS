<template>
  <h3>{{ counter }}</h3>

  <button @click="addCounter">Incrementar</button>
</template>

<script lang="ts" setup>

//Trabajando sin el setup
// import { defineComponent,Ref, ref } from 'vue';
// export default defineComponent({
//     name:'CounterComposition',
//     setup(){
//         let counter:Ref = ref(0)
//         const addCounter = ():void =>{
//             counter.value++
//         }
//         return {counter, addCounter}
//     }-
// })

/**trabajando con el setup */
import { Ref, ref } from "vue";
let counter: Ref = ref(0);
const addCounter = (): void => {
  counter.value++;
};
</script>
