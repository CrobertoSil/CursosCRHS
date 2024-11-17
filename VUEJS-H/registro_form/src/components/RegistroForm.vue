<script setup> 

function handleSubmit(data){
    console.log(data)
}
</script>


<template>
    
    <FormKit
        type="form"
        submit-label="Enviar"
        incomplete-message="Verificar los campos"
        @submit="handleSubmit"
        
    >
<FormKit
    type="text"
    name="nombre"
    label="Nombre"
    placeholder="tu nombre"
    validation="required"
    :validation-messages="{required:'Tu nombre es obligatorio'}"
    validation-visibility="blur"

/>
<FormKit
    type="text"
    name="apellido"
    label="Apellido"
    placeholder="tu apellido"
    validation="required"
    :validation-messages="{required:'Tu apellido es obligatorio'}"
    validation-visibility="blur"

/>
<FormKit
    type="email"
    name="correo"
    label="Correo Electronico"
    placeholder="tu correo"
    validation="required | email"
    :validation-messages="{required:'Tu correo es obligatorio'}"
    validation-visibility="blur"

/>
<FormKit
    type="text"
    name="tel"
    label="telefono"
    placeholder="TEL: XX-XX-XX-XX"
   
  
/>


    </FormKit>

</template>