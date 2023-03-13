<script setup lang="ts">
import QrScanner from 'qr-scanner'
import { ref } from 'vue'
import CameraScanDialog from '../components/CameraScanDialog.vue'
import { useQrCodeScanner } from '../composables'

const { readQrCodeFromFile } = useQrCodeScanner()

const fileInput = ref<HTMLInputElement>()
const isScanning = ref(false)

const readFile = async () => {
  if (!fileInput.value?.files) return

  console.log(fileInput.value.files[0])

  const result = await readQrCodeFromFile(fileInput.value.files[0])

  console.log('qr result', result)
}

const scanResult = (result: QrScanner.ScanResult) => {
  console.log('scan result', result)
  isScanning.value = false
}
</script>

<template>
  <div>
    <button type="button" @click="isScanning = true">
      Scan <font-awesome-icon :icon="['fas', 'qrcode']" /> using camera
    </button>
    <button type="button" @click="fileInput?.click">
      Open <font-awesome-icon :icon="['fas', 'qrcode']" /> from an image
    </button>
    <input
      ref="fileInput"
      type="file"
      placeholder="Choose an image containing a QR code"
      @change="readFile"
    />
  </div>
  <Transition>
    <CameraScanDialog
      v-if="isScanning"
      @cancel="isScanning = false"
      @scan-result="scanResult"
    />
  </Transition>
</template>

<style scoped lang="scss">
div {
  text-align: center;

  button {
    display: block;
    margin: 0.5em auto;
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
