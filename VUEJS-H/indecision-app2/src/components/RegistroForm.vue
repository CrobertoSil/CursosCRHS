<template>
    <div>
      <form @submit.prevent="handleSubmit">
        <FormKit
          type="text"
          name="username"
          label="Username"
          validation="required"
          v-model="form.username"
        />
        <FormKit
          type="email"
          name="email"
          label="Email"
          validation="required|email"
          v-model="form.email"
        />
        <FormKit
          type="password"
          name="password"
          label="Password"
          validation="required|min:6"
          v-model="form.password"
        />
        <FormKit
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          validation="required|match:password"
          v-model="form.confirmPassword"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const form = ref({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const handleSubmit = () => {
    // Lógica para manejar el envío del formulario
    console.log('Form Submitted:', form.value);
  };
  </script>
  