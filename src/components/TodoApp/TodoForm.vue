<template>
  <form @submit.prevent="onSubmit">
    <input type="text" placeholder="What todo?" v-model="name" />
    <button type="submit">Add</button>
  </form>
</template>

<script>
export default {
  data: () => ({
    name: '',
  }),
  methods: {
    onSubmit() {
      this.$emit('item:added', this.name);
      this.name = '';
    },
  },
};
</script>
