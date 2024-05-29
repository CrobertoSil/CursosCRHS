<template>
    <div>
        Hola Mundo        
    </div>
</template>

<script lang="ts" setup>

//con option api esta no usa el setup en la etiqueta script 
//  import { defineComponent } from 'vue';
//  export default defineComponent({
//     name: "CycleOption",
//     created() {
//         console.log("created");        
//     },
//     mounted(){
//         console.log("mounted");
//     },
//     updated() {
//         console.log("updated");
//     },
//     unmounted(){
//         console.log("unmounted");
//     }

//  })

// con composition api este lleva el setup en la etiqueta script
import { onMounted, onUpdated} from 'vue'    

onMounted(()=> {
    console.log("Mounted")
})

onUpdated(()=>{
    console.log("Updated")
})
</script>

<style scoped>

</style>