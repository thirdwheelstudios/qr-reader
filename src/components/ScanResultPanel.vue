<script setup lang="ts">
import { computed } from 'vue'
import { ScanResult } from '../models'
import { isValidUrl } from '../utils'

interface Props {
  scanResult?: ScanResult
}

const props = defineProps<Props>()

const copyResult = () => {
  if (props.scanResult) {
    navigator.clipboard.writeText(props.scanResult.data)
  }
}

const isUrl = computed(() => isValidUrl(props.scanResult?.data || ''))
</script>

<template>
  <div class="result-container">
    <template v-if="scanResult">
      <a
        v-if="isUrl"
        :href="scanResult.data"
        :title="`Visit ${scanResult.data}`"
        target="_blank"
        >{{ scanResult.data }}</a
      >
      <p v-else>{{ scanResult.data }}</p>
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

  :first-child {
    flex-grow: 1;
  }

  > * {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }

  button {
    margin: 0.25em;
    padding: 0.3em 0.5em;
  }
}
</style>
