<template>
  <form @submit.prevent="onSubmit">
    <input type="text" placeholder="What todo?" v-model.trim="name" />
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
      if (!this.name.length) {
        return;
      }
      this.$emit('item:added', this.name);
      this.name = '';
    },
  },
};
</script>
