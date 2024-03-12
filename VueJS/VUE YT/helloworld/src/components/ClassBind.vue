<template>
   <!-- <p v-bind:class="{'danger' : hasError }">El mensaje se ha enviado satisfactoriamente</p> -->
   <p v-bind:style="{backgroundColor : '#ccc', color: c }">El mensaje se ha enviado satisfactoriamente</p>
   <button v-on:click="handleClick()">
        Cambiar color
   </button>
</template>

<!-- <script lang="ts" setup>

//trabajando con compositionAPI en la parte del script no lleva el setup
//  import { defineComponent, registerRuntimeCompiler } from 'vue';
//  export default defineComponent({
//     name:'ClassBind',
//     setup(){
//         let hasError = true;
//         return {hasError};
//     }
//  })
import {ref} from 'vue';

let c = ref('#fff')

const handleClick = ()=> {c.value = '#ff0000'}

</script> -->
//trabajando con el optionAPI
<!-- <script lang="ts">
    import {defineComponent} from 'vue'
    export default defineComponent({
        name:'ClassBind',
        data(){
            return{
                c : '#fff'
            }
        },
        methods:{
            handleClick(){
                this.c = '#ff0000'
            }
        }
    })
</script> -->

//trabajando con el compositionAPI
<script lang="ts">
    import {defineComponent, ref} from 'vue'
    export default defineComponent({
        name:'ClassBind',
        setup(){
            let c = ref('#fff'); 
            const handleClick = () =>{c.value = "#ff0000"}
            return {c, handleClick}
        }
        
    })
</script>


<style>

</style>