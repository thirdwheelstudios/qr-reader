<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'
import QRCode from 'qrcode'

const dataToEncode = ref('https://google.com')
const encodedDataUrl = ref<string>()
const lightColor = ref('#f9f9fe')
const darkColor = ref('#000000')

const onSubmit = async () => {
  if (!dataToEncode.value) return

  encodedDataUrl.value = await QRCode.toDataURL(dataToEncode.value, {
    width: 300,
    errorCorrectionLevel: 'H',
    color: {
      dark: darkColor.value,
      light: lightColor.value,
    },
  })
}

onMounted(() => onSubmit())

watchEffect(() => {
  if (lightColor.value && darkColor.value && dataToEncode.value) onSubmit()
})
</script>

<template>
  <form @submit.prevent="onSubmit">
    <p>Enter text for your qr code:</p>
    <input
      type="text"
      name="dataToEncode"
      v-model="dataToEncode"
      placeholder="Enter text for qr code"
      title="Text to encode in qr code"
    />
    <img :src="encodedDataUrl" :title="dataToEncode" />
    <p>Set the qr code colors:</p>
    <div class="color-picker">
      <input type="color" name="darkColor" v-model="darkColor" /> QR Code
    </div>
    <div class="color-picker">
      <input type="color" name="lightColor" v-model="lightColor" /> Background
    </div>
  </form>
</template>

<style scoped lang="scss">
$shadow-color: #b8bce854;

form {
  text-align: center;

  p {
    margin: 0.5em 0;
  }

  input[type='text'] {
    display: block;
    margin: 1em auto;
    padding: 0.75em 1em;
    border-radius: 0.25em;
    border: 1px solid $shadow-color;
    box-shadow: 0 1px 3px $shadow-color;
    width: 100%;
    max-width: 270px;
    font-size: 1rem;
  }

  img {
    display: block;
    margin: 1em auto;
    padding: 0;
    border-radius: 1em;
    box-shadow: 0 1px 3px $shadow-color;
  }

  .color-picker {
    display: inline-block;
    margin: 0 0.5em;
  }
}
</style>
