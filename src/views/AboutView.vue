<script setup lang="ts">
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions.vue'
</script>

<template>
  <h1>About QR Reader</h1>
  <p>
    QR Reader is a web-based application that allows you to scan any QR code
    without downloading any software or an app. With its simple user interface,
    you can easily scan or read a QR code from your images or with your device's
    camera.
  </p>
  <p>
    We respect your privacy and QR Reader does not collect any data outside of
    your web browser. Our privacy policy statement is clear, direct, and easy to
    understand, and it accurately reflects our site's data collection and use.
    You can read our privacy policy
    <router-link to="/privacy-policy">here</router-link>.
  </p>
  <p>
    QR Reader was created by thirdwheel studios. For more information about QR
    Reader and other apps visit the blog
    <a href="https://thirdwheelstudios.com" target="_blank">here</a>.
  </p>
  <h1>What are QR codes?</h1>
  <ul>
    <li>
      QR code stands for quick response code and is a type of matrix barcode
      that can store various types of data
    </li>
    <li>
      QR codes were invented in 1994 by Masahiro Hara from Denso Wave, a
      Japanese company that is a subsidiary of Toyota Motor Corporation
    </li>
    <li>
      The purpose was to keep track of automotive parts during manufacturing and
      replace several barcodes on each box
    </li>
    <li>
      The initial design was influenced by the black and white pieces on a Go
      board
    </li>
    <li>
      QR codes became popular outside the automotive industry due to its fast
      readability and greater storage capacity compared to standard barcodes
    </li>
  </ul>
  <FrequentlyAskedQuestions />
</template>

<style scoped lang="scss"></style>
