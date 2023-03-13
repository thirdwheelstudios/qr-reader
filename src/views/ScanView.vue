<script setup lang="ts">
import QrScanner from 'qr-scanner'
import { ref } from 'vue'
import CameraScanDialog from '../components/CameraScanDialog.vue'
import ScanResultPanel from '../components/ScanResultPanel.vue'
import { useQrCodeScanner } from '../composables'

const { readQrCodeFromFile } = useQrCodeScanner()

const fileInput = ref<HTMLInputElement>()
const isScanning = ref(false)
const scanResult = ref<QrScanner.ScanResult>()

const readFile = async () => {
  if (!fileInput.value?.files) return

  const result = await readQrCodeFromFile(fileInput.value.files[0])

  handleScanResult(result)
}

const handleScanResult = (data: QrScanner.ScanResult) => {
  scanResult.value = data
  isScanning.value = false
}
</script>

<template>
  <div>
    <button type="button" @click="isScanning = true">
      Scan <font-awesome-icon :icon="['fas', 'qrcode']" /> using camera
    </button>
    <small>Use this option to scan a QR Code using your devices camera</small>
    <button type="button" @click="fileInput?.click">
      Open <font-awesome-icon :icon="['fas', 'qrcode']" /> from an image
    </button>
    <small
      >Use this option if you have a QR code image saved on your computer</small
    >
    <input
      ref="fileInput"
      type="file"
      placeholder="Choose an image containing a QR code"
      @change="readFile"
      accept="image/*"
    />
    <ScanResultPanel :scan-result="scanResult" />
  </div>
  <Transition>
    <CameraScanDialog
      v-if="isScanning"
      @cancel="isScanning = false"
      @scan-result="handleScanResult"
    />
  </Transition>
</template>

<style scoped lang="scss">
div {
  text-align: center;

  button {
    display: block;
    margin: 1em auto 0.25em auto;
    width: 250px;
  }

  input[type='file'] {
    display: none;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
