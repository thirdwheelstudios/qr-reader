<script setup lang="ts">
import { ref } from 'vue'
import { useQrCodeScanner } from '../composables'

const { readQrCodeFromFile } = useQrCodeScanner()

const fileInput = ref<HTMLInputElement>()

const readFile = async () => {
  if (!fileInput.value?.files) return

  console.log(fileInput.value.files[0])

  const result = await readQrCodeFromFile(fileInput.value.files[0])

  console.log('qr result', result)
}
</script>

<template>
  <div>
    <button type="button">
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
</style>
