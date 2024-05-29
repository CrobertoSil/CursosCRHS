<template>
  <div class="container">
    <PostDetail
      v-for="elm in info"
      :key="elm.title"
      :title="elm.title"
      :content="elm.content"
      @sayHi="showAlert"
    />
  </div>
</template>

<script lang="ts" setup>
import PostDetail from "./PostDetail.vue";
//trabajando con TS  se agregan las interfaces
// interface Post {
//   title: string;
//   content: string;
// }
// let info : Array<Post>

interface Post {
  title: string;
  content: string;
}
let info: Array<Post> = [
  {
    title: "Post1",
    content: "Texto 1",
  },
  {
    title: "Post2",
    content: "Texto 2",
  },
  {
    title: "Post3",
    content: "Texto 3",
  },
  {
    title: "Post4",
    content: "Texto 4",
  },
  {
    title: "Post5",
    content: "Texto 5",
  },
];

function showAlert(msg: string) {
  alert(msg);
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
}
</style>
