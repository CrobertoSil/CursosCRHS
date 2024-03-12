<template>
    <div class="post-card">
        <h3>Titulo</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, minus! Aspernatur aliquid eveniet esse inventore eius doloribus ullam? Earum quidem aliquid eveniet amet at ab quaerat voluptatum natus architecto molestias.</p>
        
        <PostButton/>
        
    </div>
</template>

<script lang="ts" setup>

    import PostButton from './PostButton.vue';

</script>

<style scoped>
.post-card{
    border-radius: 15px;
    padding: 10px;
    margin: 5px;
    border: 1px solid #ccc;
}
</style>