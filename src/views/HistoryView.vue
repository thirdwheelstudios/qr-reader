<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ScanResult } from '../models'
import { db } from '../persistence'
import { isValidUrl } from '../utils'

const history = ref<ScanResult[]>()

onMounted(async () => {
  history.value = await db.history.toArray()
})
</script>

<template>
  <template v-if="history?.length">
    <h2>QR Scan History</h2>
    <p>Here you will find your previously scanned QR code results:</p>
    <ul>
      <li v-for="item of history" :key="item.id">
        <a
          v-if="isValidUrl(item.data)"
          :href="item.data"
          :title="`Visit ${item.data}`"
          target="_blank"
          >{{ item.data }}</a
        >
        <p v-else>{{ item.data }}</p>
      </li>
    </ul>
  </template>
  <p v-else class="centered">
    Your previous <router-link to="/">scans</router-link> will appear here
  </p>
</template>

<style scoped lang="scss">
.centered {
  text-align: center;
}
</style>
