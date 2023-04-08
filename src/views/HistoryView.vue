<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ScanResult } from '../models'
import { db } from '../persistence'
import { isValidUrl, toDisplayDate } from '../utils'
import PanelContainer from '../components/PanelContainer.vue'
import { useClipboard } from '../composables/clipboard'

const { copyToClipboard } = useClipboard()

const history = ref<ScanResult[]>()

const deleteScanResult = (toDelete: ScanResult) => {
  if (!toDelete.id) return

  db.history.delete(toDelete.id)
  history.value = history.value?.filter((item) => item.id !== toDelete.id)
}

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
        <PanelContainer class="history-item">
          <div>
            <a
              v-if="isValidUrl(item.data)"
              :href="item.data"
              :title="`Visit ${item.data}`"
              target="_blank"
              >{{ item.data }}</a
            >
            <div v-else>{{ item.data }}</div>
            <div class="text-muted">
              Scanned {{ toDisplayDate(item.scannedUtcDateTime) }}
            </div>
          </div>
          <div class="buttons">
            <button
              type="button"
              title="Copy this item to the clipboard"
              @click="copyToClipboard(item.data)"
            >
              <font-awesome-icon :icon="['fas', 'copy']" />
            </button>
            <button
              type="button"
              title="Delete this item from your history"
              @click="deleteScanResult(item)"
            >
              <font-awesome-icon :icon="['fas', 'trash']" />
            </button>
          </div>
        </PanelContainer>
      </li>
    </ul>
  </template>
  <p v-else class="centered">
    Your previous <router-link to="/">scans</router-link> will appear here
  </p>
</template>

<style scoped lang="scss">
ul {
  padding-left: 0;
  display: flex;
  flex-direction: column-reverse;

  li {
    list-style: none;

    .history-item {
      padding: 0.5em;
      margin: 0.5em 0;
      display: flex;

      > * {
        margin: 0;
        display: inline-flex;
        align-items: baseline;
        flex-grow: 1;
      }

      .text-muted {
        margin-left: 0.25em;
        font-size: 0.75em;
      }

      .buttons {
        display: flex;
        justify-content: flex-end;

        button {
          margin: 0 0.25em;
          font-size: 0.75rem;
        }
      }
    }
  }
}
.centered {
  text-align: center;
}
</style>
