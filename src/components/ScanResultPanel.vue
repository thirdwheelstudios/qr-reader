<script setup lang="ts">
import QrScanner from 'qr-scanner'

interface Props {
  scanResult?: QrScanner.ScanResult
}

defineProps<Props>()
</script>

<template>
  <div>
    <p v-if="scanResult">{{ scanResult.data }}</p>
    <p v-else>Waiting for scan result...</p>
  </div>
</template>

<style scoped lang="scss">
div {
  margin: 2em auto;
  background-color: #f9f9fe;
  border: 1px solid #e4e5fc;
  box-shadow: 0 1px 3px #b8bce854;
  border-radius: 0.5em;
  max-width: 500px;
}
</style>
