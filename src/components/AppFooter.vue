<script setup lang="ts">
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>

<template>
  <footer>
    © {{ currentYear }} thirdwheel studios -
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
