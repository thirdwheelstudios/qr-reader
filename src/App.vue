<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <main>
    <router-view />
  </main>
  <AppFooter />
</template>

<style lang="scss">
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
}

button {
  background-color: #6a7cfd;
  color: #fff;
  border: 1px solid #6a7cfd;
  padding: 0.5em;
  border-radius: 0.3em;
  font-size: 1.2rem;
  box-shadow: 0 1px 5px #5e5e5e;
  cursor: pointer;
  transition: background-color 0.4s, color 0.4s;
}

button.gradient {
  background: linear-gradient(90deg, #2868d9, #6a7cfd, #2868d9);
  background-size: 200% 200%;
  -webkit-animation: animateGradient 2s infinite;
  -moz-animation: animateGradient 2s infinite;
  animation: animateGradient 2s infinite;
}

button:hover {
  background-color: #7686fd;
}

button[disabled] {
  background-color: #b2b5ca;
  color: #e9e9ec;
  border-color: #e9e9ec;
  cursor: not-allowed;
}

@keyframes animateGradient {
  0% {
    background-position: 10% 0%;
  }
  50% {
    background-position: 91% 100%;
  }
  100% {
    background-position: 10% 0%;
  }
}
</style>
