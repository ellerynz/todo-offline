<template>
  <div>
    <p v-if="isLoading">Loading...</p>
    <p v-else-if="hasError">Uhoh! Something went wrong</p>
    <div v-else>
      <TodoForm @item:added="addItem" />
      <ul>
        <li :key="item.id" v-for="item in todoItems">
          <TodoListItem :id="item.id" :name="item.item" />
        </li>
      </ul>
      <p v-if="!todoItems.length">
        There are no items yet!
      </p>
    </div>
  </div>
</template>

<script>
import { getItems, createItem } from './api';
import TodoForm from './TodoForm.vue';
import TodoListItem from './TodoListItem.vue';

export default {
  data: () => ({
    isLoading: true,
    todoItems: [],
    hasError: false,
  }),
  components: {
    TodoForm,
    TodoListItem,
  },
  methods: {
    addItem(name) {
      const tempId = Date.now().toString();
      const newItem = { id: tempId, item: name };
      this.todoItems = [newItem, ...this.todoItems];
      createItem(newItem)
        .then((items) => {
          this.todoItems = items.reverse();
        })
        .catch(() => {
          console.log('you done messed up now');
        });
    },
  },
  mounted() {
    getItems()
      .then((items) => {
        this.isLoading = false;
        this.todoItems = items.reverse() || [];
      })
      .catch(() => {
        this.hasError = true;
      });
  },
};
</script>
