<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'
import QRCode from 'qrcode'

const dataToEncode = ref('https://google.com')
const encodedDataUrl = ref<string>()
const lightColor = ref('#ffffff')
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
  if (lightColor.value && darkColor.value) onSubmit()
})
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input
      type="text"
      name="dataToEncode"
      v-model="dataToEncode"
      placeholder="Enter data to encode in QR Code"
      title="Data to encode in QR Code"
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
form {
  text-align: center;

  img {
    display: block;
    margin: 0 auto;
    padding: 1em;
  }

  .color-picker {
    display: inline-block;
    margin: 0 0.5em;
  }
}
</style>
