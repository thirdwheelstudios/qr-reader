<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import ToastMessagesContainer from './components/toasts/ToastMessagesContainer.vue'
</script>

<template>
  <AppHeader />
  <main>
    <router-view />
  </main>
  <AppFooter />
  <ToastMessagesContainer />
</template>

<style lang="scss">
@import './assets/styles/buttons';

#app {
  font-family: 'Baloo 2', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #303030;
}

html {
  body {
    margin: 0;
  }
}

main {
  padding: 0.5em;
  max-width: 900px;
  margin: auto;
}

.text-muted {
  color: #8d8fa3;
}

h1 {
  margin: 0.5em 0;
}
</style>
