import { ref } from 'vue'
import QrScanner from 'qr-scanner'

export function useQrCodeScanner() {
  const qrScanner = ref<QrScanner>()

  const readQrCodeFromFile = async (file: File) => {
    const result = await QrScanner.scanImage(file, {
      returnDetailedScanResult: true,
    })

    return result
  }

  const startScanning = (videoElem: HTMLVideoElement) => {
    const scanner = new QrScanner(
      videoElem,
      (result) => console.log(result),
      {
        returnDetailedScanResult: true,
      }
    )

    scanner.start()

    qrScanner.value = scanner
  }

  const stopScanning = () => {
    qrScanner.value?.stop()
  }

  return {
    readQrCodeFromFile,
    qrScanner,
    startScanning,
    stopScanning,
  }
}
