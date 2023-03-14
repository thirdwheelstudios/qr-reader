<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ScanResult } from '../models'
import { db } from '../persistence'

const history = ref<ScanResult[]>()

onMounted(async () => {
  history.value = await db.history.toArray()
})
</script>

<template>
  <template v-if="history?.length"></template>
  <p v-else>
    Your previous <router-link to="/">scans</router-link> will appear here
  </p>
</template>

<style scoped lang="scss">
p {
  text-align: center;
}
</style>
