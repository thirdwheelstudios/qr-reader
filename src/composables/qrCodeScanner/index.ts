import { ref } from 'vue'
import QrScanner from 'qr-scanner'
import { ScanResult } from '../../models'
import { DateTime } from 'luxon'
import { db } from '../../persistence'
import { useToastStore } from '../../store'

export function useQrCodeScanner() {
  const toastStore = useToastStore()

  const qrScanner = ref<QrScanner>()

  const mapAndSaveResult = async (scanResult: QrScanner.ScanResult) => {
    const result = {
      data: scanResult.data,
      scannedUtcDateTime: DateTime.utc().toJSDate(),
    }

    await db.history.add(result)

    toastStore.push('QR Code scanned')

    return result
  }

  const readQrCodeFromFile = async (file: File) => {
    const result = await QrScanner.scanImage(file, {
      returnDetailedScanResult: true,
    })

    if (result?.data) return await mapAndSaveResult(result)
  }

  const startScanning = (
    videoElem: HTMLVideoElement,
    result: (scanResult: ScanResult) => void
  ) => {
    const scanner = new QrScanner(
      videoElem,
      async (scanResult) => {
        if (scanResult?.data) result(await mapAndSaveResult(scanResult))
      },
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
