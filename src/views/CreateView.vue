<script setup lang="ts">
import { onMounted, ref } from 'vue'
import QRCode from 'qrcode'

const dataToEncode = ref('https://google.com')
const encodedDataUrl = ref<string>()
const lightColor = ref('#fff')
const darkColor = ref('#000')

const onSubmit = async () => {
  console.log('submit')
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
}
</style>
