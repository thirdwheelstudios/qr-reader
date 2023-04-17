<script setup lang="ts">
import { ref } from 'vue'
import CameraScanDialog from '../components/CameraScanDialog.vue'
import ScanResultPanel from '../components/ScanResultPanel.vue'
import { useQrCodeScanner } from '../composables'
import { ScanResult } from '../models'
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions.vue'

const { readQrCodeFromFile } = useQrCodeScanner()

const fileInput = ref<HTMLInputElement>()
const showScanDialog = ref(false)
const inputDisabled = ref(false)
const scanResult = ref<ScanResult>()

const onFileChange = async () => {
  if (!fileInput.value?.files) return

  try {
    inputDisabled.value = true

    const result = await readQrCodeFromFile(fileInput.value.files[0])

    handleScanResult(result)

    fileInput.value.value = ''
  } finally {
    inputDisabled.value = false
  }
}

const onScanClick = () => {
  showScanDialog.value = true
  inputDisabled.value = true
}

const handleScanResult = (data?: ScanResult) => {
  scanResult.value = data
  showScanDialog.value = false
  inputDisabled.value = false
}
</script>

<template>
  <div class="container">
    <h1>Scan a QR Code</h1>
    <p>
      QR Reader is a free online QR Code scanner that enables you to scan QR
      Codes quickly and conveniently. You don't need to install anything or
      create an account. And it doesn't cost you a penny.
    </p>
    <button type="button" @click="onScanClick" :disabled="inputDisabled">
      Scan <font-awesome-icon :icon="['fas', 'qrcode']" /> using camera
    </button>
    <small>Use this option to scan a QR Code using your devices camera</small>
    <button type="button" @click="fileInput?.click" :disabled="inputDisabled">
      Read <font-awesome-icon :icon="['fas', 'qrcode']" /> from an image
    </button>
    <small
      >Use this option to read a QR code image saved on your computer</small
    >
    <input
      ref="fileInput"
      type="file"
      placeholder="Choose an image containing a QR code"
      @change="onFileChange"
      accept="image/*"
    />
    <ScanResultPanel :scan-result="scanResult" />
    <h2>How does QR Reader work?</h2>
    <p>
      QR Reader uses native features in your web browser to scan QR Codes. This
      is how it is possible to scan QR Codes without installing any additional
      software.
    </p>
    <p>
      When you first use the scanner you may need to give QR Reader permssion to
      use your device's camera. If you need to change your camera settings, you
      may see an icon in the address bar that looks something like this:
    </p>
    <font-awesome-icon
      :icon="['fas', 'video-slash']"
      size="2x"
      class="camera-icon"
    />
    <FrequentlyAskedQuestions />
  </div>
  <Transition>
    <CameraScanDialog
      v-if="showScanDialog"
      @cancel="handleScanResult(undefined)"
      @scan-result="handleScanResult"
    />
  </Transition>
</template>

<style scoped lang="scss">
.container {
  text-align: center;
  max-width: 600px;
  margin: auto;

  h1,
  h2,
  p {
    text-align: left;
  }

  button {
    display: block;
    margin: 1em auto 0.25em auto;
    width: 250px;
  }

  input[type='file'] {
    display: none;
  }

  .camera-icon {
    color: #8d8fa3;
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
