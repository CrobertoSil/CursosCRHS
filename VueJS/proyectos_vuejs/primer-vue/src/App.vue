<script setup>
import {ref} from 'vue'

const name = "VUE";

//metodo - methods
const handleClick = () => {
  console.log("me diste click");
};

const handleClick2 = (mensaje) => {
  console.log(mensaje);
};

const contar = ref(0);
const increment = () => {
    contar.value ++;
};
</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <!-- <button v-on:click="handleClick" >Activame</button>
  <button @click="handleClick" >Activame</button>

  <button v-on:click="handleClick2('Texto1')" >Activame1</button>
  <button @click="handleClick2('Texto2')" >Activame2</button> -->
  <h1>{{ contar }}</h1>
  <button @click="increment">Aumentar</button>
</template>

<style>
h1 {
  color: blue;
}
</style>
