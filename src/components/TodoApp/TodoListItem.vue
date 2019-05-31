<template>
  <div>
    {{ name }}
    <span @click="$emit('item:deleted', id)">&times;</span>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    name: String,
    pending: Boolean,
  },
};
</script>
