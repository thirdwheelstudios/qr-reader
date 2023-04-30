<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'
import QRCode from 'qrcode'
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions.vue'

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
    <h1>Create a QR code</h1>
    <p>
      Create your own personalized QR codes with our online QR code maker. Enter
      whatever data you want and it will produce a code for you.
    </p>
    <p>
      You can also customize the colors of the QR code and it's background to
      your liking using the color pickers below.
    </p>
    <div>
      <label for="dataToEncode">Enter text for your qr code:</label>
      <input
        id="dataToEncode"
        type="text"
        name="dataToEncode"
        v-model="dataToEncode"
        placeholder="Enter text for qr code"
        title="Text to encode in qr code"
      />
      <img :src="encodedDataUrl" :title="dataToEncode" />
      <label for="darkColor">Customize colors:</label>
      <div class="color-picker">
        <input
          id="darkColor"
          type="color"
          name="darkColor"
          v-model="darkColor"
        />
        QR code
      </div>
      <div class="color-picker">
        <input
          id="lightColor"
          type="color"
          name="lightColor"
          v-model="lightColor"
        />
        Background
      </div>
    </div>
    <FrequentlyAskedQuestions />
  </form>
</template>

<style scoped lang="scss">
$shadow-color: #b8bce854;

form {
  max-width: 600px;
  margin: auto;

  div {
    text-align: center;

    small {
      margin: 0.5em 0;
    }

    input[type='text'] {
      display: block;
      margin: 0.5rem auto;
      padding: 0.5rem 0.75rem;
      border-radius: 0.25rem;
      border: 1px solid $shadow-color;
      box-shadow: 0 1px 3px $shadow-color;
      width: 100%;
      max-width: 270px;
      font-size: 1rem;
    }

    img {
      display: block;
      margin: 1rem auto;
      padding: 0;
      border-radius: 1rem;
      box-shadow: 0 1px 3px $shadow-color;
    }

    .color-picker {
      display: inline-block;
      margin: 0 0.5rem;
    }
  }
}
</style>
