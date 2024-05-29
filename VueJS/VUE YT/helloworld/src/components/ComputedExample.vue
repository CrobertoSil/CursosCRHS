<!-- <template>
   <div>
    <input type="text" v-model="message" />
    <h3>{{ message }}</h3>
    <h3>{{ reverse }}</h3>
  </div> 
</template> -->

//option API es sin el setup
<!-- <script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ComputedExample',
    data(){
        return{
            message : ''   
        }
    },
    computed: {
        reverse():string{
            return this.message.split('').reverse().join('')
        }
    }
})



</script> -->
//composition API sin el setup en el script
<!-- <script lang="ts">
import { defineComponent, ref, Ref, computed } from "vue";
export default defineComponent({
  name: "ComputedExample",
  setup() {
    let message:Ref<string> = ref("");
    const reverse = computed(() => message.value.split('').reverse().join(''))
    return { message, reverse };
  },
});
</script> -->

//composition API con el setup en el script
<!-- <script lang="ts" setup>
import { ref, Ref, computed } from "vue";

let message: Ref<string> = ref('');
const reverse = computed(() => message.value.split('').reverse().join('')); -->

<!-- </script>

<style scoped></style> -->

<template>
  <div>
    <label v-custome-size:sm> Sub Total</label>
    <input type="number" v-model="subtotal">
    <h3 v-custome-size:xxl>Toltal impuestos a pagar: {{ totalVat }} ({{ vat }}%)</h3>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref, computed } from "vue";

const vat = 21;
let subtotal: Ref<number> = ref(0);
const totalVat = computed(() => (vat * subtotal.value) / 100);
</script>

<style scoped></style>
