<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TodoApp />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoApp from '@/components/TodoApp/index.vue';

export default {
  name: 'home',
  components: {
    TodoApp,
  },
};
</script>
