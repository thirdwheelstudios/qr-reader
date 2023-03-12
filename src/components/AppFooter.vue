<script setup lang="ts">
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>

<template>
  <footer>© {{ currentYear }} thirdwheel studios</footer>
</template>

<style scoped lang="scss">
footer {
  text-align: center;
}
</style>
