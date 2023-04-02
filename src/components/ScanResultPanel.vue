<script setup lang="ts">
import { ScanResult } from '../models'

interface Props {
  scanResult?: ScanResult
}

const props = defineProps<Props>()

const copyResult = () => {
  if (props.scanResult) {
    navigator.clipboard.writeText(props.scanResult.data)
  }
}
</script>

<template>
  <div class="result-container">
    <template v-if="scanResult">
      <p>{{ scanResult.data }}</p>
      <button
        type="button"
        @click="copyResult"
        title="Copy scan result to clipboard"
      >
        <font-awesome-icon :icon="['fas', 'copy']" />
      </button>
    </template>
    <p v-else>Waiting for scan result...</p>
  </div>
</template>

<style scoped lang="scss">
.result-container {
  margin: 2em auto;
  background-color: #f9f9fe;
  border: 1px solid #e4e5fc;
  box-shadow: 0 1px 3px #b8bce854;
  border-radius: 0.5em;
  max-width: 500px;
  display: flex;

  p {
    flex-grow: 1;
  }

  button {
    margin: 0.25em;
    padding: 0.3em 0.5em;
  }
}
</style>
