<script setup lang="ts">
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>

<template>
  <footer>
    © {{ currentYear }}
    <a href="https://thirdwheelstudios.com" target="_blank"
      >thirdwheel studios</a
    >
    -
    <router-link to="/privacy-policy" class="nav-link"
      >Privacy Policy</router-link
    >
  </footer>
</template>

<style scoped lang="scss">
footer {
  text-align: center;
}
</style>
