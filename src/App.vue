<template>
  <div id="app">
    <div id="nav">
    </div>
    <div v-show="offline">
      <h2>You are offline! Not everything will work</h2>
    </div>
    <Home />
  </div>
</template>

<script>
import Home from './views/Home.vue';

export default {
  components: {
    Home,
  },
  data: () => ({
    online: true,
  }),
  computed: {
    offline() {
      return !this.online;
    },
  },
  methods: {
    updateConnectionStatus() {
      this.online = navigator.onLine;
    },
  },
  mounted() {
    window.addEventListener('online', this.updateConnectionStatus);
    window.addEventListener('offline', this.updateConnectionStatus);
  },
  beforeDestroy() {
    window.removeEventListener('online', this.updateConnectionStatus);
    window.removeEventListener('offline', this.updateConnectionStatus);
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
