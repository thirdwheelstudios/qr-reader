<script setup lang="ts">
import { ScanResult } from '../models'
import PanelContainer from './PanelContainer.vue'
import { useClipboard } from '../composables/clipboard'
import { useUrlValidation } from '../composables'

interface Props {
  scanResult?: ScanResult
}

const props = defineProps<Props>()

const { copyToClipboard } = useClipboard()
const { isValidUrl } = useUrlValidation()

const copyResult = () => {
  if (props.scanResult) {
    copyToClipboard(props.scanResult.data)
  }
}
</script>

<template>
  <PanelContainer class="result-container">
    <template v-if="scanResult">
      <a
        v-if="isValidUrl(scanResult.data)"
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
  </PanelContainer>
</template>

<style scoped lang="scss">
.result-container {
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
