<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useQrCodeScanner } from '../composables'
import { ScanResult } from '../models'

const emit = defineEmits(['cancel', 'scan-result'])

const { startScanning, stopScanning } = useQrCodeScanner()

const videoElem = ref<HTMLVideoElement>()
const isStreamingVideo = ref(false)
const interval = ref<number>()

onMounted(() => {
  interval.value = setInterval(
    () => {
      isStreamingVideo.value = (videoElem.value?.readyState ?? 0) > 0
    },
    500,
    []
  )

  startScanning(videoElem.value!, (result: ScanResult) => {
    if (result.data.length > 0) emit('scan-result', result)
  })
})

onUnmounted(() => {
  stopScanning()

  if (interval.value) clearInterval(interval.value)
})
</script>

<template>
  <div class="dialog-outer" @click.self="$emit('cancel')">
    <div class="video-container">
      <video ref="videoElem" />
      <div class="scan-line" :class="{ show: isStreamingVideo }"></div>
      <p>Place a QR code in front of the camera to scan it</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dialog-outer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff80;
  cursor: pointer;

  .video-container {
    position: relative;
    background-color: #f9f9fe;
    max-width: 600px;
    border-radius: 0.25em;
    border: 1px solid #ccc;
    padding: 0.25em;
    margin: auto;
    margin-top: 5em;
    cursor: default;

    video {
      max-width: 600px;
      border-radius: 0.25em;
    }

    .scan-line {
      position: absolute;
      top: 0.25em;
      left: 0.25em;
      width: calc(100% - 0.5em);
      height: 5px;
      background-color: #00800080;
      border-radius: 0.25em;
      box-shadow: 0px 0px 5px 0px #00800080;
      -webkit-animation: scan 3s linear infinite;
      -moz-animation: scan 3s linear infinite;
      animation: scan 3s linear infinite;
      transition: opacity 1s ease-in;
      opacity: 0;
    }

    .scan-line.show {
      opacity: 1;
    }

    p {
      margin: 0.5em;
    }
  }
}

@keyframes scan {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(330px);
  }
}
</style>
