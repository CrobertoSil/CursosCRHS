//Bindeo bidireccional(v-model)
<template>
    <form action="">
        <input type="text" v-model="inputText"/>
        <input type="checkbox" v-model="agree">Acepto los terminos y condiciones
        <select v-model="country">
            <option value="Guatemala">Guatemala</option>
            <option value="Brasil">Brasil</option>
        </select>
    </form>
    <h3>{{ inputText }}</h3>
</template>

//composition api y setup 
<!-- <script lang="ts" setup>
    import {ref} from 'vue';
    let inputText = ref('')

</script> -->


//composition api y sin setup 
<!-- <script lang="ts">
import{ref, defineComponent} from 'vue';
export default defineComponent({
    setup() {
        let inputText = ref('')
        return {inputText}    
    }
}) -->

//option api 
<!-- <script lang="ts">
import{ref, defineComponent} from 'vue';
export default defineComponent({
    data() {
        return {
            inputText : '',
            agree: true
        }    
    }
}) 
</script> -->
//trabajando con setup
<script lang="ts" setup>
    import {ref} from 'vue'
    let inputText = ref('')
    let agree = ref(true)
    let country = ref('Guatemala')
</script>

<style scoped>
</style>