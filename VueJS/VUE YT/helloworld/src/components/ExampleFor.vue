<template>
    <div>
        <ul>
            <li v-for="country in countries" v-bind:key="country.code">{{ country.name }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue';
// let countries : Ref<Array<string>> = ref([
//     'Guatemala',
//     'Espania',
//     'El salvador',
//     'Italia'
// ])
interface ICountry{
    code:string,
    name:string
}

let countries : Ref<Array<ICountry>> = ref([
{
    code: 'es',
    name: 'Espania'
},
{
    code: 'gt',
    name: 'Guatemala'
},
{
    code: 'sv',
    name:'El Salvador'
},
{
    code: 'it',
    name: 'Italia'
}
]);
</script>

<style>
</style>